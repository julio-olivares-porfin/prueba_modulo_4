import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { PizzasContext } from "../context/ContextPizzas";

const NavbarPizza = () => {
  const { carrito } = useContext(PizzasContext);

  const totalAPagar = carrito.reduce(
    (total, pizza) => total + pizza.price * pizza.count,
    0
  );

  return (
    <Navbar
      variant="primary"
      expand="lg"
      className="ps-5 pe-5 fixed-top colornavbar"
    >
      <Navbar.Brand className="fontdisplay text-white">
        <Nav.Link as={NavLink} to="/" exact className="fs-4 ps-5">
          {" "}
         Mamma Mia!
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end fw-bolder"
      >
        <Nav className="mr-auto">
          <Nav.Link
            as={NavLink}
            to="/carrito"
            exact
            className="fs-4 pe-2 fondocarrito"
          >
            🛒 $ {totalAPagar.toLocaleString()}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarPizza;
