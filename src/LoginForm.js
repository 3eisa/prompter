import React, { useContext, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './LoginForm.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import {  useNavigate } from 'react-router-dom';

import {UserContext} from './UserContext';
import FormHeader from './FormHeader';




//Validation schema for Formik form
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
});


//main func
const LoginForm = () => {
  
  //hooks
  const navigate = useNavigate();

  const {user, setUser} = useContext(UserContext);

  //handles
    //form submit
  const handleSubmit = (values) => {
    console.log("Form Submited: ", values)
  };

  //parse JWT
  const handleLoginToken = (jwt) => {
    //change to http cookies
    window.localStorage.setItem('thwart-token',jwt)
    let pj = jwt_decode(jwt);

    setUser({
      name:pj.name,
      picture:pj.picture,
      isLoggedIn:true
    })
    //false for debugging
    navigate('/',{replace:false})
  }

  //check for session
  useEffect(()=>{
    const token = window.localStorage.getItem('thwart-token')
    if (token)
    handleLoginToken(token)
  },[])



  //render
  return (
    <div className="login-form-container">
      <FormHeader />

      <p>Your quick way to for making a treatment plan for your patients.</p>
      
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field 
                type="email"
                name="email"
                id="email"
                placeholder="Ex: twath@example"
                className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
              />
              {errors.email && touched.email && <p className="invalid-feedback">{errors.email}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field 
                type="password"
                name="password"
                id="password"
                placeholder="******"
                className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
              />
              {errors.password && touched.password && <p className="invalid-feedback">{errors.password}</p>}
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
          </Form>
        )}
      </Formik>

      <div className='or-divider'>
          <p>-OR-</p>
      </div>

      <div className='auth-div'>
        
        {/* clientId should be referenced from .env */}
        <GoogleOAuthProvider clientId="70461215392-jn7k4r4ri1ed4bsifeekjpomrjp0bvip.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={credentialResponse => {
              handleLoginToken(credentialResponse.credential)
            }}
            onError={() => {
              console.log('Login Failed')
            }}
          />
        </GoogleOAuthProvider>

      </div>

    </div>
  );
};

export default LoginForm;
