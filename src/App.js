import React, { Component } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import AddEmployee from './component/AddEmployee';
import Employee from './component/Employee';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          firstname: "Robert",
          lastname: "Alabi",
          email: "wolo22001@gmail.com",
          phonenumber: "024548752",
          homeaddress: "810aa",
          jobrole: "sales",
          currentsalary: "¢1,000",
          id: "158794klkj"
        },
        {
          firstname: "Roland",
          lastname: "Yaw",
          email: "wolo22001@gmail.com",
          phonenumber: "024548752",
          homeaddress: "8000aa",
          jobrole: "manager",
          currentsalary: "¢5,000",
          id: "158794khhj"
        },
        {
          firstname: "Benjamin",
          lastname: "Asibi",
          email: "wolo22001@gmail.com",
          phonenumber: "024548752",
          homeaddress: "7810aa",
          jobrole: "Accounts",
          currentsalary: "¢3,000",
          id: "16698794klkj"
        },

      ]
    }
  }
  addNewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }
  DeleteUser = (id) => {
    let undeletedUser = this.state.users.filter((user => user.id !== id))
    this.setState({
      users: undeletedUser
    })
  }
  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })
  }
  render() {
    return (
      <section>
        <Navbar />
        <Container fluid className="App">
          <Row>
            <Col md="4">
              <AddEmployee addUser={this.addNewUser} />
            </Col>
            <Col>
              <Employee usersData={this.state.users} DeleteUser={this.DeleteUser} editUser={this.editUser} />
            </Col>
          </Row>

        </Container>
      </section>
    );
  }
}

export default App;

