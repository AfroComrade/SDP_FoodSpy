import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Footer from "./pages/footer";
import Menu from './pages/menu';

import About from './pages/about';
import SavedRecipes from './pages/SavedRecipes';
import RecipeDatabase from './pages/RecipeDatabase';
import AddRecipe from './pages/AddRecipe';

class App extends Component {
  render() {
  return (
    <div className = "background">
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
    </div>
  );
}
}

export default App;