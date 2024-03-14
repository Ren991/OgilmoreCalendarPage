import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Opciones from "./components/Opciones/Opciones";
import Cursos from "./components/Cursos/Cursos";
import FormClases from "./components/ClasesIndividuales/FormClases";
import Calendario from "./components/ClasesIndividuales/Calendario"


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/InscripcionesHome" element={<Opciones />}/>
        <Route path="/formularioCursos" element={<Cursos/>}/> {/* => FORMULARIO CURSO */}
        <Route path="/formularioClases" element={<FormClases/>}/> {/* => FORMULARIO CLASES */}
        <Route path="/ClasesPerzonalizadas" element={<Calendario/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
