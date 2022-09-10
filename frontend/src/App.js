import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./pages/footer";
import Menu from './pages/menu';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;