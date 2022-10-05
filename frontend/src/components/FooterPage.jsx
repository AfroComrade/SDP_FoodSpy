import React from "react";

// This component attaches to the bottom of every page that the user will go to, and is mainly used as a disclaimer to ensure users
// know that the information obtained my not be up to date.

function Footer(){
    return(
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; FoodSpy 2022</p>
                <p className="m-0 text-center text-white">Disclaimer: This is for a university project, and prices displayed maybe using dummy data, or may be outdated. Please refer to the supermarkets website for current pricing.</p>
                </div>
        </footer>
    );   
}

export default Footer;