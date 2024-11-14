import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/shared/Navbar";
import Mohinur from "./pages/mohinur";

function App() {
  return (
    <>
      <Navbar />
      <Mohinur
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
