import React from 'react';
import {  Routes, Route } from "react-router-dom";
import "../App.css";

import Home from "./HomePage";
import Footer from "../components/FooterPage";
import NavBar from '../components/NavBar';
import About from './AboutPage';
import SavedRecipes from './SavedRecipes';
import RecipeDatabase from './RecipeDatabase';
import Recipe from './Recipe';
import Searched from './SearchPage';
import ForgotPassword from './ForgotPassword';
import CreateAcc from './CreateAcc';
import SearchedItems from './SearchPageItems';
import ChooseCuisine from './ChooseCuisine';
import CuisineRecipes from './CuisineRecipes';
import ChooseDiet from './ChooseDiet';
import DietRecipes from './DietRecipes';

// This file creates the routes for the Navbar, allowing the user to navigate through the websites different pages.

function Pages() {
  return (
    <div >
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/recipes_saved" element={<SavedRecipes />}/>
        <Route path="/recipes_database" element={<RecipeDatabase/>}/>
        <Route path="/recipes_choose_cuisine" element={<ChooseCuisine/>}/>
        <Route path="/recipe/:name" element={<Recipe />}/>
        <Route path="/searched/:search" element={<Searched />}/>
        <Route path="/searcheditems/:searchitems" element={<SearchedItems />}/>
        <Route path="/forgot_password" element={<ForgotPassword />}/>
        <Route path="/create_account" element={<CreateAcc />}/>
        <Route path="/recipes_cuisine/:cuisine" element={<CuisineRecipes/>}/>
        <Route path="recipes_choose_diet" element={<ChooseDiet/>}/>
        <Route path="recipes_diet/:diet" element={<DietRecipes/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default Pages;