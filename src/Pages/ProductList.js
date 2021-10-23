import React, {Component} from 'react';
import {Button, Table} from "react-bootstrap";

export default class ProductList extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.products.title}
                    <span className="text-info">{` ${this.props.products.currentCategory.categoryName ?? ``}`}</span>
                </h3>
                <div className="card card-body px-5 pt-5">
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Quantity Per Unit</th>
                            <th>Units In Stock</th>
                            <th>Unit Price</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.products.products.map(product => (
                                <tr key={product.id}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td>{product.unitPrice}</td>
                                    <td><Button
                                        onClick={() => this.props.products.addToCart(product)}
                                        className="text-sm btn-sm" color="primary">+ Card</Button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}