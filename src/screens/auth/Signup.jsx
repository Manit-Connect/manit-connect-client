import React from 'react'
import { Button, TextField } from '@mui/material'
import Lottie from 'react-lottie';
import signup from '../../assets/lottie/signup.json'


const Signup = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: signup,
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
      <h1>Signup</h1>
      <TextField
        id="outlined-basic"
        type="text"
        label="Username"
        variant="outlined"
        className='login-input'
      />
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
        Signup
      </Button>
    </div>
  )
}

export default Signup