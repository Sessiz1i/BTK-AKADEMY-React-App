import React, {Component} from 'react';
import {Button, Table} from "react-bootstrap";

class CartDetail extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>{this.props.cart.title}</h3>
                    <div className="card card-body px-5 pt-5">
                        <Table hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Unit Price</th>
                                <th>Units In Stock</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.cart.cart.map(item => (
                                    <tr key={item}>
                                        <td>{item.product.id}</td>
                                        <td>{item.product.productName}</td>
                                        <td>{item.product.unitPrice}</td>
                                        <td>{item.product.unitsInStock}</td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            <Button className="btn btn-sm btn-danger"
                                                    onClick={() => this.props.cart.removeFromCart(item)}
                                            >X Remove</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartDetail;