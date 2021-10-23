import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";

class FormDemo1 extends Component {
    state = {
        userName: '',
        email:''
    }
    onChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})


    }
    onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(event)
    }

    render() {
        return (
            <div>
                <h3>Form Demo 1</h3>
                <div className="card card-body col-md-6 px-5 py-5 shadow">
                    <Form onSubmit={this.onSubmitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name : {this.state.userName}</Form.Label>
                            <Form.Control
                                onChange={this.onChangeHandler}
                                type="text" name="userName" placeholder="Enter User Name"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address : {this.state.email}</Form.Label>
                            <Form.Control
                                onChange={this.onChangeHandler}
                                type="email" name="email" placeholder="Enter email"/>
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