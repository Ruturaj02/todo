import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/login'
import Signup from './Components/signup'
import DashBoard from './Components/dashboard'
import  Notes  from './Components/Notes'


function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/dashboard" element={<DashBoard/>}/> 
              <Route path="/notes" element={<Notes/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>

  )
}
export default App