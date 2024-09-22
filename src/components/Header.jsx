import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,NavLink } from 'react-router-dom';
function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="d-flex justify-content-around">
       
        <Navbar.Brand as={Link} to="/" ><img src="https://infolibros.org/wp-content/uploads/2020/11/Infolibros-Menu.jpg" alt="" /></Navbar.Brand>

         <NavLink as={Link} to="/" className={"nav"} >Inicio</NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />

      
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav className="d-flex">
          <NavDropdown title="Libros Gratis" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1"style={{  
                
  fontFamily: "Inria Sans",
  fontWeight: "400",
  fontStyle:"normal",}}>Harry potter Saga de Libros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                 Señor de los Anillos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Crepusculo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Mas libros
              </NavDropdown.Item>
              </NavDropdown>
           
            <NavDropdown title="Elije un Autor" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
              <NavLink className="nav"  to="/administrador">Administrador</NavLink>    
           
       
            <NavLink to="/error404" className="nav">InfoLibros</NavLink>
            <Nav.Link><i class="bi bi-search"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
