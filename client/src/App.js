import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Opciones from "./components/Opciones/Opciones";
import Cursos from "./components/Cursos/Cursos";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/InscripcionesHome" element={<Opciones />}/>
        <Route path="/Cursos" element={<Cursos/>}/> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
