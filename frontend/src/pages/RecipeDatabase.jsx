import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import "../App.css";

function RecipeDatabase() {
      return (
        <>
        <div style={{
                paddingTop: '100px',
                paddingBottom: '325px',
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

export default RecipeDatabase;