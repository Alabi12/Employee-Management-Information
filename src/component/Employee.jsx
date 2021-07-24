import React, {useState} from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import EditEmployee from './EditEmployee';

const Employee = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) => {
        e.preventDefault();
        props.DeleteUser(props.userInfo.id);
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditEmployee userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose} />
                </Modal.Body>
                
            </Modal>
                    
            <Col md="4" style={{ marginBottom: "1rem" }}>
                
                <Card>
                    <Card.Body>

                        <Card.Subtitle className="mb-2 text-muted">
                            Contact Details
                        </Card.Subtitle>
                        <Card.Title>{props.userInfo.name}</Card.Title>
                        <Card.Text>
                            <p>First Name: {props.userInfo.firstname}</p>
                            <p>Last Name: {props.userInfo.lastname}</p>
                            <p>Email: {props.userInfo.email}</p>
                            <p>Phone Number: {props.userInfo.contact}</p>
                            <p>Home Address: {props.userInfo.address}</p>
                            <p>Job Role: {props.userInfo.jobrole}</p>
                            <p>Current Salary: {props.userInfo.currentsalary}</p>
                        </Card.Text>
                        <Card.Link href="#"><Button variant="primary" size="sm" onClick={handleShow}>Edit</Button></Card.Link>
                        <Card.Link href="#"><Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default Employee;
