import React from 'react';
import {  Routes, Route } from "react-router-dom";
import "../App.css";

import Home from "./Home";
import Footer from "./Footer";
import Menu from './Menu';
import About from './About';
import SavedRecipes from './SavedRecipes';
import RecipeDatabase from './RecipeDatabase';
import AddRecipe from './AddRecipe';
import Recipe from './Recipe';
import Searched from './SearchPage';
import ForgotPassword from './ForgotPassword';
import CreateAcc from './CreateAcc';

function Pages() {
  return (
    <div className = "background">
    <Menu />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/recipes_saved" element={<SavedRecipes />}/>
        <Route path="/recipes_database" element={<RecipeDatabase/>}/>
        <Route path="/recipes_add" element={<AddRecipe/>}/>
        <Route path="/recipe/:name" element={<Recipe />}/>
        <Route path="/searched/:search" element={<Searched />}/>
        <Route path="/forgot_password" element={<ForgotPassword />}/>
        <Route path="/create_account" element={<CreateAcc />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default Pages;