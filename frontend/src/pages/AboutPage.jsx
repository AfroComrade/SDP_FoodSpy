import React from "react";
import '..//App.css';
import logo from "../assets/FoodspyLogo.png"

// This page contains details about the purpose of the website, and is essentially a double up of the content seen 
// in the footer. 

function About() {
  document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/616403/pexels-photo-616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = '1910px 950px';
  document.body.style.backgroundColor = '#2E7F72';
  document.body.style.backgroundPosition = 'center';
    
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