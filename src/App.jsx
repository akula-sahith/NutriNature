import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Chilli from "./pages/Chilli";
// import Turmeric from "./pages/Turmeric";
// import Coriander from "./pages/Coriander";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Footer from "./components/Footer";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/products/chilli" element={<Chilli />} />
        <Route path="/products/turmeric" element={<Turmeric />} />
        <Route path="/products/coriander" element={<Coriander />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;