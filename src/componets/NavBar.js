import React , {useState , useEffect} from "react";
 import { Nav ,Container,Navbar,NavDropdown } from "react-bootstrap";

const NavBar = ()=>{
    const [navbar, setnavbar] = useState(null);
  const changeBackground = () => {
   let scrollPo = window.pageYOffset;
    if (scrollPo >= 600) {
      setnavbar(true)
    } else {
      setnavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground)
  })
    return(
        <Navbar   variant="dark" expand="lg" className= {navbar ? "navbar active fixed-top" : "navbar fixed-top"}>
        <Container fluid>
          <Navbar.Brand href="/"> <h1> Restaurants </h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};
export default NavBar;
