import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class CartList extends Component {
  state = {
    categoryId: null,
    productName: null,
    unitPrice: null,
    unitsInStock: null
  };
  tableHeaders = [
    '#',
    'Category Id',
    'Product Name',
    'Unit Price',
    'Units In Stock',
    'Quantity',
    ''
  ];

  renderCart() {

    return (
      <Table striped>
        <thead>
          <tr>
            {this.tableHeaders.map((header, index) => (
                <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map(cartItem => (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.props.removeFromCart(cartItem.product)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderCart()}</div>;
  }
}
