import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ContextPizzas } from "../context/ContextPizzas";


const PizzaNavbar = () => {
  const { cart } = useContext(ContextPizzas)
  const totalPriceToPay = cart.reduce(
    (total, pizza) => total + pizza.price * pizza.count,
  );

  return (
    <Navbar bg="info" variant="primary" expand="lg" className="ps-5 pe-5 fixed-top">
      <Container>
        <Navbar.Brand className=" text-white">
          <Nav.Link as={NavLink} to="/" exact className="fs-4 ps-5">
            {" "}
            🍕 Pizzería Mamma Mia!
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end fw-bolder">
          <Nav className="mr-auto">
          <Nav.Link
            as={NavLink}
            to="/carrito"
            exact
            className="text-white fs-4 pe-5">
            🛒 $ {totalPriceToPay.toLocaleString()}
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default PizzaNavbar
