import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: []
  };

  componentDidMount(){
      this.getCategories();
  }

    getCategories = async () => {
        try {
            const response = await fetch("http://localhost:3000/categories");
            const data = await response.json();
            this.setState({ categories: data });
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
            {this.state.categories.map(category => (
                <ListGroupItem
                    active={category.categoryName === this.props.currentCategory}
                    onClick={() => this.props.changeCategory(category)}
                    key={category.id}
                >
                    {category.categoryName}
                </ListGroupItem>
            ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
