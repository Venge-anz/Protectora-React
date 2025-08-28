import { useContext, useState } from "react";
import { AuthContext } from "../../auth/context";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const { user } = useContext(AuthContext); //Igual deberia cambiar email por email
  const { logout } = useContext(AuthContext); //Igual deberia cambiar email por email

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-xl/30 p-1">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="h-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-130">
            <img src="src/assets/logo.png" className="h-10" alt="Adoppet" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Adoppet
            </span>
          </div>
        </a>
        {/* ////////////// BUSCADOR */}
        <div className="hidden w-full md:block md:w-auto " id="navbar-default">
          <div
            className="font-medium flex flex-wrap items-center p-0.3 mt-4 border border-gray-100 rounded-lg
           bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            {/* Aqui empieza el buscador */}
            <div className="max-w-lg mx-auto">
              <div className="flex relative">
                <button
                  onClick={() => setMenuVisible(!menuVisible)}
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="shrink-0 cursor-pointer z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                >
                  All categories
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {menuVisible && (
                  <div className=" absolute top-full left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-button"
                    >
                      <li>
                        <button
                          onClick={() => (window.location.href = "/adoptions")}
                          type="button"
                          className="inline-flex w-full px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Adoptions
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => (window.location.href = "/sponsor")}
                          type="button"
                          className="inline-flex w-full px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sponsorships
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Shop
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="..."
                    required
                  />
                  <button
                    type="submit"
                    className=" cursor-pointer absolute top-0 end-0 text-sm font-medium h-full text-white bg-amber-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-lg text-1xl px-5 me-0 dark:focus:ring-yellow-900 "
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </div>

            <li className="flex gap-10">
              <a className="text-yellow-500 ml-10"> {user?.name}</a>

              {user?.name ? (
                // Si el usuario está logueado, muestra solo el botón Logout
                <button
                  onClick={() => {
                    logout();
                    window.location.href = "/login";
                  }}
                  className="text-amber-50 hover:text-yellow-500 cursor-pointer"
                >
                  Logout
                </button>
              ) : (
                // Si NO hay usuario, muestra ambos botones: Login y Get Started
                <div className=" flex">
                  <button
                    onClick={() => (window.location.href = "/login")}
                    className="text-amber-50 hover:text-yellow-500 cursor-pointer"
                  >
                    Login
                  </button>

                  <button
                    onClick={() => (window.location.href = "/register")}
                    type="button"
                    className="focus:outline-none ml-3 cursor-pointer text-white bg-amber-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 dark:focus:ring-yellow-900"
                  >
                    GET STARTED!
                  </button>
                </div>
              )}

              {/* <button
                onClick={() => (window.location.href = "/register")}
                type="button"
                className="focus:outline-none cursor-pointer ml-3 text-white bg-amber-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 dark:focus:ring-yellow-900 w-40 "
              >
                GET STARTED!
              </button> */}
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};
