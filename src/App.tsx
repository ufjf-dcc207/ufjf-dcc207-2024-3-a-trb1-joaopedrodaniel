import './App.css'
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Sobre from "./components/Sobre";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection/>
      <Sobre/>
      <Footer />
    </div>
  );
}

export default App
