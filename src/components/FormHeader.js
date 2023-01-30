import React from 'react'
import '../styles/LoginForm.css';
import logo from '../assets/logo192.png'

export default function FormHeader({className="form-header"}) {
  return (
    <div className={className}>
        <h1>Treatment Plan Writer AI <img style={{ width: 32, height: 32, fontSize:'small'}} src={logo} alt='Logo' /></h1>
        
      </div>
  )
}
