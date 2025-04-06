import React, {useState} from "react";
import "./styles.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {FaUser} from 'react-icons/fa'

export default function Login(){
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const logar = async ()=>{
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/token/',
        {
          username: user,
          password: password
        }
      )
      console.log("TokenLogin: ", response.data.access)
      localStorage.setItem('token', response.data.access)
      navigate('/home')
    } catch (error) {
      console.error(error)
    }
  }
 
  return(
    <div className="container_login">
      
      <FaUser className="icon" />

      <input
        className="caixa"
        value={user}
        onChange={(e)=>{setUser(e.target.value)}}
        placeholder="User"
      />

      <input
        className="caixa"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        placeholder="Password"
        type="password"
      />

      <button className="btn" onClick={logar}>
        Enter
      </button>

    </div>
  )
}

