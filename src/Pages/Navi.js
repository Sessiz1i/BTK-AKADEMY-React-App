import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import CartSummery from "./CartSummery";
import {Link} from "react-router-dom";


export default class Navi extends Component {
    render() {
        return (
            <Navbar className="fixed-top" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">{this.props.navi.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/cart-detail"}>Cart Detail</Nav.Link>
                            <Nav.Link as={Link} to={"/form-demo1"}>Form Demo 1</Nav.Link>
                            <Nav.Link as={Link} to={"/form-demo2"}>Form Demo 2</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <CartSummery navi={this.props.navi}/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}