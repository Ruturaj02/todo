import React, { useState } from 'react'
import { Card, Container, Navbar, Nav } from 'react-bootstrap'
import DashBoard from './dashboard'

const getlocalData = ()=> {
  const  datas = localStorage.getItem("UserInfo");
  if(datas){
    return JSON.parse(datas);
  }
  else{
    return [];
  }
}

function Login() {

  const [regLog, setRegLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [dash, setDash] = useState(true);
  const [userInfo, setUserInfo] = useState(getlocalData());


  function handleLogin(e) {
    e.preventDefault();

    if(!regLog|| !passwordLog)
    {
      alert("-- ALL FIELDS ARE MANDATORY --") ;
      setRegLog("");
      setPasswordLog("");
    }
    else {

      if(userInfo.find((v) => {return v.reg === regLog && v.pass === passwordLog}))
        {
          alert("-- LOGIN SUCCESSFUL --") ;
          setRegLog("");
          setPasswordLog("");
          setDash(!dash);

        }
    else{
          alert("-- LOGIN FAILED --") ;
          setRegLog("");
          setPasswordLog("");
    }
   }
  }

    return (
        <>
        {
          dash?(
            <form onSubmit={handleLogin}>

              <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="/"><h1>CRUD APP</h1></Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end" id="quizNavBar">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <Nav.Link href="/sign-in">Sign in |</Nav.Link>
                        </li>
                        <li className="nav-item">
                        <Nav.Link href="/sign-up">Sign up</Nav.Link>
                        </li>
                      </ul>
                  </Navbar.Collapse>
                </Container>
              </Navbar>

        <br/><br/>

              <Container>
                <div className="d-flex justify-content-center">
                  <Card border="dark" style={{ width: '37rem' }}>
                    <Card.Header className="text-center"><h3>SIGN IN</h3></Card.Header>
                    <Card.Body>
                      <div className="mb-3">
                        <label>User Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter registration number"
                          value={regLog}
                          onChange={(event) => setRegLog(event.target.value.trim())}
                        />
                      </div>

                      <div className="mb-3">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                          value={passwordLog}
                          onChange={(event) => setPasswordLog(event.target.value.trim())}
                        />
                      </div>

                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                      <p className="new-user text-right">
                          New user? <a href="/sign-up">sign up here!</a>
                      </p>
                  </Card.Body>
                </Card>
              </div>
            </Container> 
          </form>) : (<DashBoard />)
        }
      </>
    );
  }

  export default Login ;