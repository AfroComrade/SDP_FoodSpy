import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./pages/footer";
import Menu from './pages/menu';
import About from './pages/about';
import SavedRecipes from './pages/SavedRecipes';
import RecipeDatabase from './pages/RecipeDatabase';
import AddRecipe from './pages/AddRecipe';

function App() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/recipes_saved" element={<SavedRecipes />}/>
        <Route path="/recipes_database" element={<RecipeDatabase/>}/>
        <Route path="/recipes_add" element={<AddRecipe/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;