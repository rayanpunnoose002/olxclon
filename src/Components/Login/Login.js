import React from 'react';
import {useContext,useState} from 'react'
import {FirebaseContext} from '../../store/firebasecontext'
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';
import {Link} from'react-router-dom'

function Login() {
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const{firebase} = useContext(FirebaseContext)
  const history=useHistory()
 const handlelogin=(e)=>{
  e.preventDefault()
  firebase.auth().signInWithEmailAndPassword(email, pass)
  .then((res) => {
    history.push('/')
  }).catch((error)=>{
    alert(error.message)
  }

  )}
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlelogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)

            }}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={pass}
            onChange={(e)=>{
              setPass(e.target.value)

            }}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
