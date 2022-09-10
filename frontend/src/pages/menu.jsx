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
              <NavDropdown.Item href="recipes_saved">Saved Recipes</NavDropdown.Item>
              <NavDropdown.Item href="recipes_database">
              Recipes Database
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="recipes_add">
              Add Recipes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
      <Nav>
        <Button variant="outline-light">
        <span class="badge bg-dark text-white ms-0 rounded-pill"><i class="bi bi-person"> 
                </i> </span> Account</Button>{' '}
        </Nav>
          <Nav style={{
                paddingLeft: '10px'}}>        
        <Button variant="outline-light" >
            <i class="bi bi-cart3"></i> Cart
            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                </Button>{' '}
      </Nav>
     
    
    </Navbar.Collapse>
    </Container>
    </Navbar>
  );
};


export default Menu;