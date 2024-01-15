import './App.css';
import Navi from "./Navi";
import Category from "./Category";
import ProductList from "./ProductList";
import {Col, Container, Row} from "reactstrap";

function App() {
  return (
    <div>
        <Container>
            <Row>
                <Navi></Navi>
            </Row>
            <Row>
                <Col xs="4">
                    <Category></Category>
                </Col>
                <Col xs="8">
                    <ProductList></ProductList>
                </Col>
            </Row>
        </Container>

    </div>
  );
}

export default App;
