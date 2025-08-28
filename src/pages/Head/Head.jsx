import { Footer } from "../Navbar/Footer";
import { Navbar } from "../Navbar/Navbar";
import { SecondHead } from "./SecondHead";

export const Head = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-amber-200 ">
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
      </div>
      <SecondHead></SecondHead>
      <Footer></Footer>
    </>
  );
};
