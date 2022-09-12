import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'


function RecipeDatabase() {
    document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/616403/pexels-photo-616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '1910px 950px';
    document.body.style.backgroundColor = '#2E7F72';
    document.body.style.backgroundPosition = 'center';
    //document.body.style.backgroundBlendMode = 'overlay';
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