import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/shared/Navbar";
import "./pages/Ismoyil";
import Mohinur from "./pages/mohinur";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Mohinur />} />
      </Routes>
    </>
  );
}

export default App;
