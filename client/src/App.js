//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeNav from "./components/HomeNav";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <HomeNav />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
