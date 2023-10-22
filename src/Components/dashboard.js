import React from 'react'
import { Container, Nav, Navbar, Badge } from 'react-bootstrap'


function DashBoard() {

    const userName = JSON.parse(localStorage.getItem('UserInfo')).name ;

    return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><h1>CRUD APP</h1></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end" id="quizNavBar">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Nav.Link href="/sign-in">Sign out |</Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link href="/notes">Add Note</Nav.Link>
                    </li>
                    </ul>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <br/><br/><br/>

            <Container>
                <div className="d-flex justify-content-center">
                <br/><br/>

                        <div>
                            <h1><Badge bg="success">WELCOME to Crud Application</Badge></h1>
                            
                            <h3>{userName}</h3>


                        </div>
                </div>
            </Container>
        </div>
    );
}

export default DashBoard ;




