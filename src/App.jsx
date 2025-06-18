import { Route, Routes } from "react-router";
import { Login, Pets, Register, Head } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Head />} />
        <Route path="login" element={<Login />} />
        <Route path="pets" element={<Pets />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
