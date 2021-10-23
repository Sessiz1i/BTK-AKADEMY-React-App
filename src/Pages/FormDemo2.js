import React, {Component} from 'react';
import {Button, Form, Row} from "react-bootstrap";
import alertify from "alertifyjs";

class FormDemo1 extends Component {

    state = {
        name: null,
        email: null,
        password: null,
        re_password: null,
        city: null,
        description: null
    }

    // TODO Form doldurma esnasında state i set eden fonksiyon
    handlerChange = event => this.setState({[event.target.name]: event.target.value})

    // TODO Form Submit anında sayfanın refres olmasını engelleyen fonksiyon
    handlerSubmit = event => {
        event.preventDefault()
        alertify.success(`${this.state.name}<br>Added to db!`)
    }

    render() {
        return (
            <div>
                <h3>Form Demo 2</h3>
                <div className="card card-body px-5 pt-5 pb-4 shadow">
                    <Form onSubmit={this.handlerSubmit}>
                        <Row lg={12}>
                            <Form.Group className="mb-3 col-lg-6" controlId="name">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control
                                    onChange={this.handlerChange}
                                    type="text" name="name" placeholder="Enter Name"/>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    onChange={this.handlerChange}
                                    type="email" name="email" placeholder="Enter email"/>
                            </Form.Group>
                        </Row>
                        <Row lg={12}>
                            <Form.Group className="mb-3 col-lg-6" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    onChange={this.handlerChange}
                                    type="password" name="password" placeholder="Enter Password"/>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="password">
                                <Form.Label>Re-Password</Form.Label>
                                <Form.Control
                                    onChange={this.handlerChange}
                                    type="password" name="re_password" placeholder="Enter Re-Password"/>
                            </Form.Group>
                        </Row>
                        <Row lg={"12"}>
                            <Form.Group className="mb-3 col-lg-6" controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Select
                                    onChange={this.handlerChange}
                                    name="city" aria-label="select">
                                    <option>Open this select menu</option>
                                    <option value="1">Ankara</option>
                                    <option value="2">İstanbul</option>
                                    <option value="3">İzmir</option>
                                    <option value="4">Bursa</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                onChange={this.handlerChange}
                                as={"textarea"} rows={4} name="description" placeholder="Enter Description"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Button variant="primary" type="submit" className="float-end">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}

export default FormDemo1;