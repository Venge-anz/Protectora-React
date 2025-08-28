import { Route, Routes } from "react-router";
import { Login, Register } from "./pages/Account/index";
import { Adoptions } from "./pages/Categories/Adoptions";
import { AuthProvider } from "./auth/context";
import { Sponsorship } from "./pages/Categories/Sponsorship";
import { Head } from "./pages/Head";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Head />} />
          <Route path="login" element={<Login />} />
          <Route path="adoptions" element={<Adoptions />} />
          <Route path="register" element={<Register />} />
          <Route path="sponsor" element={<Sponsorship />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
