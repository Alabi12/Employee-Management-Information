import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./style.css"

class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            contact: ""
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            firstname: "",
            lastname: "",
            email: "",
            contact: ""
        });

    }

    render() {
        return (
            <>
            <h1 className="heading">Contact Form</h1>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                    type="Text" 
                    placeholder="Enter first name" 
                    name="firstname" value={this.state.firstname} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                    type="Text" 
                    placeholder="Enter last name" 
                    name="lastname" value={this.state.lastname} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email adddress" 
                    name="email" value={this.state.email} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control 
                    type="number" 
                    placeholder="Enter phone number" 
                    name="contact" 
                    value={this.state.contact} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </>
        );
    }
}

export default AddEmployee;
