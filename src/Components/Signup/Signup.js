import React from 'react';
import {useState,useContext} from 'react'
import {useHistory,Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import {FirebaseContext} from '../../store/firebasecontext'
import './Signup.css';


export default function Signup() {
  const [username,setUsername]=useState('')
  const [email,SetEmail]=useState('')
  const [phno,setPhno]=useState('')
  const [pass,setPass]=useState('')
  const {firebase}= useContext(FirebaseContext)
  const history = useHistory()
  const Submit=(e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, pass).then((res)=>{
      res.user.updateProfile({
        displayName:username
      }).then(()=>{
        firebase.firestore().collection('users').add({
          id:res.user.uid,
          username:username,
          mobile:phno

        }).then(()=>{
          history.push('/login')

        })
      })

    })
  }
  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="300px" height="200px" src={Logo}></img>
        <form onSubmit={Submit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>{
              setUsername(e.target.value)

            }}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>{
              SetEmail(e.target.value)
            }}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phno}
            onChange={(e)=>{
              setPhno(e.target.value)

            }}
            id="lname"
            name="phone"
            defaultValue="Doe"
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
          <button>Signup</button>
        </form>
        <Link to='/login'>Login</Link> 
      </div>
    </div>
  );
}
