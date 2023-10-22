import React, { useState } from 'react'
import { Card, Container, Navbar, Nav } from 'react-bootstrap'
import Login from './login'


const getlocalData = ()=> {
  const  datas = localStorage.getItem("UserInfo");
  if(datas){
    return JSON.parse(datas);
  }
  else{
    return [];
  }
}

function SignUp() {

  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState(getlocalData());
  const [log, setLog] = useState(true);

  const isValidEmail = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

const isValidPassword = password => {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  return regex.test((password));
}


  function handleFormSubmit(e) {
    e.preventDefault() ;
    
    if(!name|| !reg|| !email|| !password)
    {
      alert("-- ALL FIELDS ARE MANDATORY --") ;
      setName("");
      setReg("");
      setEmail("");
      setPassword("");

    }
    else {

      if(userInfo.find((v) => {return v.reg === reg}))
        {
          alert("-- REGISTRATION NUMBER ALREADY EXISTS! --") ;
          setName("");
          setReg("");
          setEmail("");
          setPassword("");

        }

      else if(!isValidEmail(email))
        {
          alert("not a valid mail") ;
          setName("");
          setReg("");
          setEmail("");
          setPassword("");
        }
      else if(password.length<4 && password.length>14)
        {
          alert("password must be between 4-14 characters!")
          setName("");
          setReg("");
          setEmail("");
          setPassword("");
        }
      else if(!isValidPassword(password))
        {
          alert("Password must be in the format : Test@1234") 
          setName("");
          setReg("");
          setEmail("");
          setPassword("");
        }
    else{

    let info = {
          id: Date.now(),
          name: name,
          reg : reg,
          email: email,
          pass: password
        }

    // setUserInfo([...userInfo,info]) ;
    userInfo.push(info);
    // console.log(userInfo) ;

    localStorage.setItem("UserInfo", JSON.stringify(userInfo) );

    setName("");
    setReg("");
    setEmail("");
    setPassword("");
    setLog(!log) ;
    }
  }
}

    return (
          <>
          {" "}
          {
            log?(
            <form onSubmit={handleFormSubmit}>

              <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="/sign-in"><h1>CRUD APP</h1></Navbar.Brand>
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
                  <Card border="dark" style={{width: '37rem'}}>
                    <Card.Header className="text-center"><h3>SIGN UP</h3></Card.Header>
                      <Card.Body>
                        <div className="mb-3">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter name"
                            value={name}
                            id="name"
                            autoComplete='off'
                            onChange={(event) => setName(event.target.value.trim())}
                          />
                        </div>

                        <div className="mb-3">
                          <label>User Name</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter registration number" 
                            value={reg}
                            id="reg"
                            autoComplete='off'
                            onChange={(event) => setReg(event.target.value.trim())}
                          />
                        </div>

                        <div className="mb-3">
                          <label>Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            id="email"
                            autoComplete='off'
                            validator="isEmail"
                            onChange={(event) => setEmail(event.target.value.trim())}
                          />
                        </div>

                        <div className="mb-3">
                          <label>Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            id="password"
                            autoComplete='off'
                            onChange={(event) => setPassword(event.target.value.trim())}
                          />
                        </div>

                        <div className="d-grid">
                          <button type="submit" 
                                  className="btn btn-primary"
                                  id="btn" > Submit
                          </button>
                        </div>
                        <p className="existing-user text-right">
                          Already registered? <a href="/sign-in">sign in here!</a>
                        </p>
                      </Card.Body>
                    </Card>
                </div>
              </Container>
            </form>) :(<Login />)
            }

          </>
    );
  }

  export default SignUp ;