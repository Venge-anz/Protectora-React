import { Route, Routes } from "react-router";
import { Login, Register, Head } from "./pages";
import { Adoptions } from "./pages/Adoptions";
import { AuthProvider } from "./auth/context";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Head />} />
          <Route path="login" element={<Login />} />
          <Route path="adoptions" element={<Adoptions />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
