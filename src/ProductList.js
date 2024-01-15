import React, {Component} from 'react';

class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}

export default ProductList;