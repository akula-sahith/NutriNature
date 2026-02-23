import { BrowserRouter, Routes, Route , useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import B2BPage from "./pages/B2BPage";
import AboutPage from "./pages/AboutPage";
import QualityPage from "./pages/QualityPage";
// import Products from "./pages/Products";
// import Chilli from "./pages/Chilli";
// import Turmeric from "./pages/Turmeric";
// import Coriander from "./pages/Coriander";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This forces the window to scroll to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // Fires every time the URL path changes

  return null;
}
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/b2b" element={<B2BPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/quality" element={<QualityPage/>}/>
        {/* // <Route path="/products/chilli" element={<Chilli />} />
        // <Route path="/products/turmeric" element={<Turmeric />} />
        // <Route path="/products/coriander" element={<Coriander />} />
        // <Route path="/about" element={<About />} />
        // <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;