import './App.css'
import Cardapio from './components/Cardapio';
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Sobre from "./components/Sobre";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection/>
      <Cardapio />
      <Sobre/>
      <Footer />
    </div>
  );
}

export default App
