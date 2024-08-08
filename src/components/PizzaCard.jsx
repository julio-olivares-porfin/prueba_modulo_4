import { useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PizzasContext } from "../context/ContextPizzas";

const CardPizza = () => {
  const navigate = useNavigate();
  const { pizzas, addPizzaToCard } = useContext(PizzasContext);

  console.log("pizzas Home-->", pizzas);
  //   console.log("pizza Home img-->", pizzas[0].img);

  return (
    <Row className="cardPizza pt-4">
      {pizzas.map((p, index) => (
        <Col key={index} md={3} className="p-3">
          <Card>
          <Card.Img className="pizzadetimg" src={p.img} fluid />
            {/* <img src={p.img} alt={p.name} className="card-img-top" /> */}
            <Card.Body>
              <Card.Title className="text-capitalize fw-bolder">
                {p.name}
              </Card.Title>
              <hr />
              <Card.Text className="fw-bolder">Ingredientes:</Card.Text>
              <ul>
                {p.ingredients.map((ingredient, i) => (
                  <li key={i} className="text-capitalize">🍕 {ingredient}</li>
                ))}
              </ul>
            </Card.Body>
            <Card.Footer className="py-4 text-center ">
              <h3 className="fw-bolder pb-2">$ {p.price.toLocaleString()}</h3>
              <Button
                className="m-1 btn-sm"
                variant="primary"
                onClick={() => navigate(`/pizza/${p.id}`)}
              >
                Ver Más 👀
              </Button>
              <Button
                className="m-1 btn-sm"
                variant="danger"
                onClick={() => addPizzaToCard(p)}
              >
                Añadir 🛒
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardPizza;
