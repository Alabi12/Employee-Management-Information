import React from 'react';
import { Container, Row } from 'react-bootstrap';
import User from './User';


const Employees = (props) => {
    return (
        <>
    <h1 className="heading2">Form Output</h1>
        <Container className="Users">    
            <Row>
                {props.usersData.map((user) => {
                    return <User userInfo={user} 
                    key={user.id} 
                    DeleteUser={props.DeleteUser} 
                    editUser={props.editUser}/>
                })}
            </Row>
        </Container>
        </>
    );
}

export default Employees;

