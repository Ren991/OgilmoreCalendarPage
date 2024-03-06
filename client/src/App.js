import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Opciones from "./components/Opciones/Opciones";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/InscripcionesHome" element={<Opciones />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
