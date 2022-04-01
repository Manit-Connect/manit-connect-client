import React from 'react'
import { Button, TextField } from '@mui/material'
import Lottie from 'react-lottie';
import login from '../../assets/lottie/login.json'


const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="login">
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
      />
      <h1>Login</h1>
      <TextField
        id="outlined-basic"
        type="email"
        label="Email"
        variant="outlined"
        className='login-input'
      />
      <TextField
        id="outlined-basic"
        type="password"
        label="Password"
        variant="outlined"
        className='login-input'
      />
      <Button
        className='login-button'
        variant="contained">
        Login
      </Button>
    </div>
  )
}

export default Login