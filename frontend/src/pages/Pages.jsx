import React from 'react';
import {  Routes, Route } from "react-router-dom";
import "../App.css";

import Home from "./HomePage";
import Footer from "./FooterPage";
import NavBar from './NavBar';
import About from './AboutPage';
import SavedRecipes from './SavedRecipes';
import RecipeDatabase from './RecipeDatabase';
import AddRecipe from './AddRecipe';
import Recipe from './Recipe';
import Searched from './SearchPage';
import ForgotPassword from './ForgotPassword';
import CreateAcc from './CreateAcc';
import SearchItems from '../components/SearchItems';
import Items from './Items';

function Pages() {
  return (
    <div className = "background">
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/recipes_saved" element={<SavedRecipes />}/>
        <Route path="/recipes_database" element={<RecipeDatabase/>}/>
        <Route path="/recipes_add" element={<AddRecipe/>}/>
        <Route path="/recipe/:name" element={<Recipe />}/>
        <Route path="/searched/:search" element={<Searched />}/>
        <Route path='/searcheditems/:searchitems' element={<SearchItems />}/>
        <Route path="/items/:name" element={<Items />}/>
        <Route path="/forgot_password" element={<ForgotPassword />}/>
        <Route path="/create_account" element={<CreateAcc />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default Pages;