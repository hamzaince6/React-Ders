import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Routes, Route } from 'react-router-dom';
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";
import * as PropTypes from "prop-types";

function Switch(props) {
  return null;
}

Switch.propTypes = { children: PropTypes.node };

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = category => {
    category.categoryName = undefined;
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  addToCart = product => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!");
  };

  removeFromCart = product => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart!");
  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Routes>
                  <Route
                      path="/"
                      element={
                        <ProductList
                            products={this.state.products}
                            addToCart={this.addToCart}
                            currentCategory={this.state.currentCategory}
                            info={productInfo}
                        />
                      }
                  />
                  <Route
                      path="/cart"
                      element={<CartList cart={this.state.cart} removeFromCart={this.removeFromCart} />}
                  />
                  <Route path="/form1" element={<FormDemo1 />} />
                  <Route path="/form2" element={<FormDemo2 />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
