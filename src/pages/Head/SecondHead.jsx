import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PetsIcon from "@mui/icons-material/Pets";

export const SecondHead = () => {
  const imagenes = [
    "/products/imagen1.webp",
    "/products/imagen2.jpeg",
    "/products/imagen3.jpg",
    "/products/imagen4.webp",
  ];

  console.log(imagenes);
  return (
    <>
      {/* ////SEGUNDA PAGINA  */}
      <div className="bg-amber-100 flex flex-col justify-center items-center p-10">
        <div className="m-9 w-full max-w-[1000pv]">
          <div className="mx-9 my-4 italic text-green-600 text-base underline text-left">
            Online shop
          </div>
        </div>
         
        <div className="not-italic text-5xl mb-10 ">PRODUCTS FOR YOUR PET!</div>
        {/* IMAGENES PRODUCTOS */}
        <div className="grid md:grid-cols-2 gap-6">
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
              <hr />

              <div className="flex flex-col gap-4 mb-9">
                <div className="font-extralight text-2xl ">
                  TODAY'S <hr /> DEALS
                </div>
                <button className="focus:outline-none cursor-pointer text-white bg-amber-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 dark:focus:ring-yellow-900 w-40">
                  <ShoppingCartIcon />
                </button>

                <button className="focus:outline-none cursor-pointer text-white bg-amber-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 dark:focus:ring-yellow-900 w-40">
                  Donate <PetsIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
