import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";

import Home from "./home";
import Footer from "./footer";
import Menu from './menu';
import About from './about';
import SavedRecipes from './SavedRecipes';
import RecipeDatabase from './RecipeDatabase';
import AddRecipe from './AddRecipe';
import Recipe from './Recipe';
import Searched from './SearchPage';

function Pages() {
  return (
    <div className = "background">
    <Menu />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="recipes_saved" element={<SavedRecipes />}/>
        <Route path="recipes_database" element={<RecipeDatabase/>}/>
        <Route path="recipes_add" element={<AddRecipe/>}/>
        <Route path="recipe/:name" element={<Recipe />}/>
        <Route path="searched/:search" element={<Searched />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default Pages;