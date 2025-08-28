import { Route, Routes } from "react-router";
import { Login, Register } from "./pages/Account/index";
import { AuthProvider } from "./auth/context";
import { Head } from "./pages/Head";
import { Shop, Sponsorship, Adoptions } from "./pages/Categories/index";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Head />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="adoptions" element={<Adoptions />} />
          <Route path="sponsor" element={<Sponsorship />} />
          <Route path="shop" element={<Shop />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
