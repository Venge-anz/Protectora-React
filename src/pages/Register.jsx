import { useState } from "react";
import { Navbar } from "./Navbar/navbar";
import { Footer } from "./Navbar/Footer";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre: name, email: email, password: password });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-amber-200">
        <div className="bg-zinc-800 p-8 rounded-2xl shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center text-amber-50 mb-6">
            Create an account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-amber-50 mb-1">
                User name
                <a className="text-amber-600">*</a>
              </label>
              <input
                type="text"
                placeholder="Pedro Pascal"
                className="w-full text-amber-50 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-amber-50 mb-1">
                Email
                <a className="text-amber-600">*</a>
              </label>
              <input
                type="email"
                placeholder="correo@ejemplo.com"
                className="w-full text-amber-50 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className=" block text-sm font-medium text-amber-50 mb-1">
                Password<a className="text-amber-600">*</a>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 text-amber-50 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer hover:bg-amber-400 transition"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account??
            <a href="/login" className="text-amber-600 hover:underline m-1 ">
              Register
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
