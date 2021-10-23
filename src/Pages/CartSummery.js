import React, {Component} from 'react';
import {Badge, NavDropdown, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";

class CartSummery extends Component {
    yourCart() {
        return (
            <NavDropdown title={`Your Cart ${this.props.navi.cart.length}`} id="basic-nav-dropdown">
                {this.props.navi.cart.map(item => (
                    <NavDropdown.Item key={item.product.id} className={"d-flex justify-content-between px-1"}>
                        <span className="me-4">{item.product.productName.slice(0, 20)}</span>
                        <div className="d-flex align-items-center">
                            <Badge className="bg-info me-1" pill>{item.quantity}</Badge>
                            <Badge className="bg-danger" pill
                                   onClick={() => this.props.navi.removeFromCart(item)}>X</Badge>
                        </div>
                    </NavDropdown.Item>
                ))}
                <NavDropdown.Divider/>
                <NavDropdown.Item as={Link} to={"/cart-detail"}>Cart Detail</NavDropdown.Item>
            </NavDropdown>
        )
    }

    emptyCart() {
        return (<NavItem>Empty Cart</NavItem>)
    }

    render() {
        return (
            <div>
                {
                    this.props.navi.cart.length > 0
                        ? this.yourCart()
                        : this.emptyCart()
                }
            </div>
        );
    }
}

export default CartSummery;