import React from 'react'
import './LoginForm.css';
import logo from './logo192.png'

export default function FormHeader() {
  return (
    <div className="form-header">
        <h1>Treatment Plan Writer AI <img style={{ width: 32, height: 32, fontSize:'small'}} src={logo} alt='Logo' /></h1>
        
      </div>
  )
}
