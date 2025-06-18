import { Navbar } from "./Navbar/navbar";

export const Head = () => {
  const imagenes = [
    "/products/imagen1.webp",
    "/products/imagen2.jpeg",
    "/products/imagen3.jpg",
    "/products/imagen4.webp",
  ];

  console.log(imagenes);

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-amber-200">
        <div className="flex flex-row items-center ">
          <div className="flex flex-col mt-3'">
            <div className="text-7xl font-stretch-extra-condensed ml-60 mr-10 mt-10 mb-20">
              Find your perfect companion and change two lives forever.
            </div>

            <div className="text-2xl font-light ml-60 mr-10 text-gray-500 mb-20 ">
              {" "}
              Discover our loving companions waiting for a forever home. Each
              one full of personality, loyalty, and unconditional affection —
              ready to bring joy, comfort, and a new meaning to your everyday
              life.{" "}
            </div>
          </div>

          <img
            src="src/assets/razas-perros.jpg"
            className="w-150 shadow-xl/60 mr-10"
            alt="perros-grupal"
          ></img>
        </div>
        {/* ////SEGUNDA PAGINA  */}
        <div className="bg-amber-100 flex flex-col justify-center items-center ">
          <div className="m-9 w-full max-w-[1000pv]">
            <div className="mx-9 my-4 italic text-green-600 text-base underline text-left">
              Online shop
            </div>
          </div>
           
          <div className="not-italic text-5xl mb-10 ">
            PRODUCTS FOR YOUR PET!
          </div>
          {/* IMAGENES PRODUCTOS */}
          <div className="grid grid-cols-2 gap-6">
            {imagenes.map((imagen, index) => (
              <div
                key={index}
                className="bg-amber-50 p-10 rounded-xl m-2 flex flex-row justify-center items-center space-x-10"
              >
                <img
                  src={imagen}
                  alt={`imagen-producto-${index}`}
                  className="w-40 h-50 rounded-xl border-4 border-amber-500 border-x-amber-400 mb-6"
                />
                <div className="flex flex-col gap-4">
                  <p className="font-extralight text-2xl">Now on our shop!</p>
                  <button className="focus:outline-none cursor-pointer text-white bg-amber-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 dark:focus:ring-yellow-900 w-40">
                    Buy
                  </button>
                  <button className="focus:outline-none cursor-pointer text-white bg-amber-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 dark:focus:ring-yellow-900 w-40">
                    Donate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
