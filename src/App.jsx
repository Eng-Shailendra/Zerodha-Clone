import "./App.css";
import HomePage from "./LANDING PAGE/home/HomePage";
import { Route, Routes } from "react-router-dom";
import Pricing from "./LANDING PAGE/pricing/Pricing";
import Support from "./LANDING PAGE/support/Support";
import About from "./LANDING PAGE/about/AboutPage";
import Product from "./LANDING PAGE/produt/Product";
import Signup from "./LANDING PAGE/signup/Signup";
import Footer from "./LANDING PAGE/Footer";
import Navbar from "./LANDING PAGE/Navbar";
import Login from "./LANDING PAGE/login/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
