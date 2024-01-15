import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class Category extends Component {
    render() {
        return (
            <div>
              <h2>Category Component</h2>
                <ListGroup
                    horizontal
                >
                    <ListGroupItem>
                        Cras justo odio
                    </ListGroupItem>
                    <ListGroupItem>
                        Dapibus ac facilisis in
                    </ListGroupItem>
                    <ListGroupItem>
                        Morbi leo risus
                    </ListGroupItem>
                    <ListGroupItem>
                        Porta ac consectetur ac
                    </ListGroupItem>
                    <ListGroupItem>
                        Vestibulum at eros
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default Category;