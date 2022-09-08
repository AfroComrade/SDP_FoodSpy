import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

function Menu() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
        <img
              alt=""
              src="./assets/icon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          FoodSpy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link text = "" href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <NavDropdown title="Recipes" id="basic-nav-dropdown">
              <NavDropdown.Item href="recipes/saved">Saved Recipes</NavDropdown.Item>
              <NavDropdown.Item href="recipes/database">
              Recipes Database
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="recipes/add">
              Add Recipes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
      <Nav>
        <Button variant="dark">
            <i class="bi bi-person"> Account
                </i></Button>{' '}
                
        <Button variant="dark">
            <i class="bi bi-cart3"></i> Cart
                </Button>{' '}
      </Nav>
     
    
    </Navbar.Collapse>
    </Container>
    </Navbar>
  );
};


export default Menu;