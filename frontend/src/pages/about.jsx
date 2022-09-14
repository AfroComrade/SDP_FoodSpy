import React, { Component } from "react";

class About extends Component {
  render(){
    document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/616403/pexels-photo-616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '1910px 950px';
    document.body.style.backgroundColor = '#2E7F72';
    document.body.style.backgroundPosition = 'center';
  
  return (
    <>
    <div style={{
            paddingTop: '250px',
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            
        }}>
      <h1 style = {{ color:"dark", fontSize: 60, fontWeight: "bold"}}>This is for a university project, and prices displayed maybe using dummy data, or may be outdated. Please refer to the supermarkets website for current pricing.</h1>
      </div>
      <div style={{
            paddingTop: '250px'         
        }}></div>
    </>
  );
}
}

export default About;