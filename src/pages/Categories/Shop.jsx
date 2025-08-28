import { useScrollTrigger } from "@mui/material";
import { Footer } from "../Navbar/Footer";
import { Navbar } from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Shop = () => {
  //Estado donde metemos los productos

  const [products, setProducts] = useState([]);

  const getStore = async () => {
    const resp = await fetch(
      "https://68b0213a3b8db1ae9c02d404.mockapi.io/api/v1/products"
    );
    const data = await resp.json();
    console.log(data);

    setProducts(data);
  };

  useEffect(() => {
    getStore();
  }, []);

  console.log(products);

  return (
    <>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-15">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-gray-200 rounded-lg overflow-hidden shadow-md p-3"
          >
            <img
              src={product.image}
              alt="Image shop"
              className="w-50 mt-3 rounded-2xl"
            ></img>
            <p className="mt- font-extrabold border-b mt-5">{product.name}</p>
            <p className="m-10 italic">{product.description}</p>
            <p>{product.price} $</p>

            <div className="flex flex-row gap-10 mt-5">
              <ShoppingCartIcon className="cursor-pointer"></ShoppingCartIcon>
              <FavoriteBorderIcon className="cursor-pointer"></FavoriteBorderIcon>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};
