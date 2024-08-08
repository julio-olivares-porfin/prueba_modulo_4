import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ContextPizzas } from "../context/ContextPizzas";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const PizzaDetail = () => {
  const { pizzas, addPizzaCart } = useContext(ContextPizzas)
  const { id } = useParams();

  const pizza = pizza[pizzas.findIndex((pizzas) => pizzas.id === id)];

  return (

    <Container>
      <Card>
        <Row className="cardPizza g-0">
          <Col md={5} className="p-3">
            <Card.Img className="pizzadetimg" src={pizza.img} fluid />
            {/* <img src={pizza.img} alt={pizza.name} className="card-img-start" /> */}
          </Col>
          <Col md={7} className="p-3">
            <Card.Body>
              <Card.Title className="text-capitalize">{pizza.name}</Card.Title>
              <hr />
              <Card.Text>{pizza.desc}</Card.Text>
              <Card.Text>Ingredientes:</Card.Text>
              <ul>
                {pizza.ingredients.map((ingredient, i) => (
                  <li className="text-capitalize" key={i}>
                    🍕 {ingredient}
                  </li>
                ))}
              </ul>
            </Card.Body>
            <Card.Footer className="py-3 footdetpizza">
              <h2>Precio: ${pizza.price.toLocaleString()}</h2>
              <Button variant="danger" onClick={() => addPizzaCart(pizza)}>
                Añadir 🛒
              </Button>
            </Card.Footer>
          </Col>
        </Row>
      </Card>
      <NavLink as={NavLink} to="/" >Ver todas las pizzas</NavLink>
    </Container>

  )
}

export default PizzaDetail
