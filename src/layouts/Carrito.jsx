import { useContext } from "react";
import { ContextPizzas } from "../context/ContextPizzas";
import { Button, Col, Container, InputGroup, ListGroup, Row } from "react-bootstrap";

const Carrito = () => {
  const { carrito, addPizzaCart, removePizzaCart } =
    useContext(ContextPizzas);
  const totalPrice = carrito.reduce(
    (total, pizza) => pizza.price * pizza.count,
    0
  );

  return (

      <Container className="carrito">
        <h4>Detalle del Pedido:</h4>
        <ListGroup variant="flush">
          {carrito.map((item, i) =>(
            <ListGroup.Item key={i} className="" >
              <Row>
                <Col md={1}>
                  <img src={item.img} alt={item.name} className="img-fluid" />
                </Col>
                <Col>
                  <h5 className="">{item.name}</h5>
                  <p className="">${item.price.toLocaleString()}</p>
                </Col>
                <Col md={2}>
                  <InputGroup className="text-end">
                    <Button
                      variant="danger"
                      onClick={() => removePizzaCart(item)}
                    >
                      -
                    </Button>
                    <p className="m-2 fw-bold"> {item.count} </p>
                    <Button
                      variant="primary"
                      onClick={() => addPizzaCart(item)}
                    >
                      +
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="text-start mt-4">
          <hr />
          <h3>Total: ${totalPrice.toLocaleString()}</h3>
          <Button variant="success" className="btn btn-primary mt-2">
            Ir a pagar
          </Button>
        </div>
      </Container>

  )
}

export default Carrito
