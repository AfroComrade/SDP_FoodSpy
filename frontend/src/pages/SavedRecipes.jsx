import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import "..//App.css";


// This is a placeholder page for where the SavedRecipes would be stored against a users account.
// Originally recipes were going to be displayed using ListGroups however after doing further research and finding
// the use of cards and splides, I switched to that. This was originally aimed at being a Sprint 1 feature however 
// to it has been pushed back to Sprint 2 due to time constraints.

function SavedRecipes() {
      return (
        <>
        <div style={{
                paddingTop: '100px',
                paddingBottom: '125px',
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
            
        }}>
        
        <h1 style = {{ color:"white", fontSize: 30, fontWeight: "bold"}}>This is the Add Recipe Page, which will be implemented during Sprint 2. </h1>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",

        }}>
        <ListGroup className="d-flex mx-sm-10 mb-2" defaultActiveKey="#link1" >
          <ListGroup.Item action href="#link1">
            Temp Recipe
          </ListGroup.Item>
          <ListGroup.Item action href="#link2" disabled>
            No more Recipes
          </ListGroup.Item>
        </ListGroup>
        </div>      
        </>
  );
}

export default SavedRecipes;