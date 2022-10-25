import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button, Modal, Form, Offcanvas, Row, Col, Card } from 'react-bootstrap';
import {Login} from '../js/Authentication/userAuthentication';
// This component creates the NavBar, which can be accessed on all pages, and is used to be able to navigate between pages
// bring up a popbox for the User to login, and a side window which includes the users shopping cart.

function Menu() {

  const [modalShow, setModalShow] = useState(false);
  const [offcanvasShow, setOffShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const toggleShow = () => setOffShow(true);
  const toggleClose = () => setOffShow(false);
  const [Email,SetEmail] = useState('');
  const [Password,SetPassword] = useState('');


  const LoginUser = () =>
  {
      Login(Email,Password);
  }


  return (
    <Navbar sticky='top' className="bg-dark shadow-sm" expand="lg" variant="dark" >
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
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Recipes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/recipes_saved">Saved Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/recipes_database">Recipes Database</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/recipes_choose_cuisine">Recipes by Cuisine</NavDropdown.Item>
              <NavDropdown.Item href="/recipes_choose_diet">Recipes by Dietary Requirements</NavDropdown.Item>
            </NavDropdown>
          </Nav>
      <Nav style={{
                paddingLeft: '10px', paddingRight: '10px'}}>
        <Button variant="outline-light" onClick={handleShow}>
        <span className="badge bg-dark text-white ms-0 rounded-pill"><i className="bi bi-person"> 
                </i> </span> Account</Button>{' '}
        </Nav>
        <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Account Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                input = {Email}
                onChange={(e) => SetEmail(e.target.value)}
                autoFocus
              />
            </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                input = {Password}
                onChange={(e) => SetPassword(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Container>
          <Row >
            <Col >
            <a href="/create_account" className="btn btn-warning active" role="button" aria-pressed="true">Create Account</a>
            
          
          </Col>
          <Col md="4">
          <Button variant="primary" onClick={LoginUser}>
            Login
          </Button>
         
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Col>
          </Row>
          <Row>
            
          <a href="/forgot_password">Forgot your password</a>
         
          </Row>
          </Container>
        </Modal.Footer>
      </Modal>
          <Nav style={{
                paddingLeft: '10px', paddingRight: '10px'}}>        
        <Button variant="outline-light" onClick={toggleShow}>
            <i className="bi bi-cart3"></i> Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                </Button>{' '}
                <Offcanvas show={offcanvasShow} onHide={toggleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Card>
            <Card.Img src='https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='/>
            <Card.Body className='d-flex flex-column'>
              <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                <span className='fs-2'>Item Name</span>
                <span className='ms-2'>1 in cart</span>
                <span className='ms-2'>$0.99</span>
                </Card.Title>
                <Button onClick={toggleClose} variant="danger" size="sm" style={{
                width: "40px", alignContent: "center"}}>X</Button>
            </Card.Body>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
      </Nav>
     
    
    </Navbar.Collapse>
    </Container>
    </Navbar>
  );
};


export default Menu;