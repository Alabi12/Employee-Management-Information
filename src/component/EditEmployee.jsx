import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';


class EditEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: props.userInfo.firstname,
            lastname: props.userInfo.lastname,
            email: props.userInfo.email,
            phoneNumber: props.userInfo.contact,
            homeAddress: props.userInfo.address,
            jobRole: props.userInfo.jobrole,
            currentSalary: props.userInfo.currentsalary,
            id: props.userInfo.id
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
        this.props.editUser(this.state.id, this.state);
        this.setState({
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: "",
            homeaddress: "",
            jobrole: "",
            currentsalary: ""
        });
        this.props.closeModal()
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicfirstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                    type="Text" 
                    placeholder="Enter first name" 
                    name="firstname" value={this.state.firstname} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiclastname">
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
                <Form.Group className="mb-3" controlId="formBasiccontact">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                    type="number" 
                    placeholder="Enter phone number" 
                    name="contact" 
                    value={this.state.contact} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiccontact">
                    <Form.Label>Home Address</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter home Address" 
                    name="address" 
                    value={this.state.address} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiccontact">
                    <Form.Label>Job Role</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter job role" 
                    name="jobrole" 
                    value={this.state.jobrole} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiccontact">
                    <Form.Label>Current Salary</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter current salary" 
                    name="jobrole" 
                    value={this.state.currentsalary} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default EditEmployee
