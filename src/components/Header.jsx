import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="d-flex justify-content-around">
       
        <Navbar.Brand ><img src="https://infolibros.org/wp-content/uploads/2020/11/Infolibros-Menu.jpg" alt="" /></Navbar.Brand>

      
        <Navbar.Toggle aria-controls="navbarScroll" />

      
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav className="d-flex">
            <Nav.Link href="#action1" >Libros Gratis</Nav.Link>
            <Nav.Link href="#action2">Elije un Autor</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">InfoLibros</Nav.Link>
            <Nav.Link><i class="bi bi-search"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
