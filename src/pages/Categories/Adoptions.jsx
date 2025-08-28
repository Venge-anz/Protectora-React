import { useEffect, useState } from "react";
import { Footer } from "../Navbar/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Pagination } from "@mui/material";

export const Adoptions = () => {
  const [dogs, setDogs] = useState([]);
  const [page, setPage] = useState(1);

  //Estado de carga
  const [loading, setLoading] = useState(false);

  //Caché de la pagina

  const [cache, setCache] = useState({});

  const API_key =
    "live_jsBK3hbBGYks2FxFYphliicuwG7QqRad0jgruer4gyB55nghdkoxGxR9S3GbYmx4";

  const getDogs = async () => {
    const resp = await fetch(
      "https://api.thedogapi.com/v1/images/search?limit=20",
      {
        headers: {
          "x-api-key": `${API_key}`,
        },
      }
    );

    const data = await resp.json();

    setDogs(data);
  };

  useEffect(() => {
    setTimeout(() => {
      getDogs(page);
      setLoading(false);
    }, 3000);
  }, [page]);

  console.log(dogs);

  const handleChange = (value) => {
    setLoading(true);
    setPage(value);
  };

  console.log(loading);

  return (
    <>
      {/* CARRUSER */}
      <Navbar></Navbar>

      {loading === true ? (
        <div className="flex items-center justify-center m-30">
          <img src="/progress.gif" alt="loadingImage" className="w-100"></img>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-15 mb-15">
          {dogs.map((dog, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg overflow-hidden shadow-md flex flex-col items-center"
            >
              {/* Imagen */}
              <img
                src={dog.url}
                alt="dogImage"
                className="w-full h-auto object-cover"
              />

              {/* Información */}
              <div className="p-4 text-center">
                <p className="font-semibold text-lg">
                  {dog.breeds?.[0]?.name || "Unknown breed"}
                </p>
                <p className="text-sm text-gray-700">
                  {dog.breeds?.[0]?.temperament || "Unknown temperament"}
                </p>
                <p className="text-sm text-gray-600">
                  {dog.breeds?.[0]?.life_span || "Unknown life span"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-col items-center mb-15">
        <Pagination
          count={5}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      </div>

      <Footer></Footer>
    </>
  );
};
