import React from "react";
import '..//App.css';
import logo from "../assets/FoodspyLogo.png"

function About() {
    
  return (
    <>
    <div style={{
            paddingTop: '150px',
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            
        }}>
          <img src={(logo)} alt='logo'></img>
      <h1 style = {{paddingTop: 100,paddingLeft: 250, paddingRight: 250, color:"dark", fontSize: 35, fontWeight: "bold"}}>This is for a university project, and prices displayed maybe using dummy data, or may be outdated. Please refer to the supermarkets website for current pricing.</h1>
      </div>
      <div style={{
            paddingTop: '250px'         
        }}>

        </div>
    </>
  );
}


export default About;