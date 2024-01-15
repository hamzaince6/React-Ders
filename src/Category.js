import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class Category extends Component {
    render() {
        return (
            <div>
              <h2>{this.props.title}</h2>
                <ListGroup>
                    <ListGroupItem>
                        Cras justo odio
                    </ListGroupItem>
                    <ListGroupItem active>
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