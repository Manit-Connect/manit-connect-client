import React from 'react'
import login from '../../assets/lottie/login.json'
import { Button, TextField } from '@mui/material'
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';

const initialValue = {
  email: '',
  password: ''
}

const Login = () => {
  const [values, setValues] = React.useState(initialValue)
  const history = useNavigate()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const loginFunc = () => {
    fetch("https://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then(res => console.log(res))
      .then(data => {
        console.log(data)
        if (data.message === "User not found") {
          alert("User not found")
        } else if (data.message === "Password is incorrect") {
          alert("Wrong password")
        } else if (data.message === "Login successful") {
          history.push('/home')
        }
      }).catch(err => {
        console.log(err)
      }
      )
  }
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
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <TextField
        id="outlined-basic"
        type="password"
        label="Password"
        variant="outlined"
        className='login-input'
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />
      <Button
        className='login-button'
        variant="contained"
        onClick={loginFunc}
      >
        Login
      </Button>
    </div>
  )
}

export default Login