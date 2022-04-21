import React from 'react'
import { Button, TextField } from '@mui/material'
import Lottie from 'react-lottie';
import signup from '../../assets/lottie/signup.json'
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../../utils/constant';
import { useAppDispatch } from '../../app/hooks';
import { setUser } from '../../features/user/userSlice';

const initialValue = {
  email: '',
  password: '',
  name: ''
}
const Signup = () => {
  const [values, setValues] = React.useState(initialValue)
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const addUser = (name, email, token) => {
    dispatch(setUser(
      {
        name,
        email,
        token
      }
    ))
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: signup,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const signupFunc = () => {
    fetch(`${apiUrl}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    }).then(res => res.json())
      .then(data => {
        if (data.message === "User already exists") {
          alert("User already exists")
        } else if (data.message === "User created") {
          addUser(data.user.name, data.user.email, data.token)
          navigate('/home')
        }
      }
      ).catch(err => {
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
      <h1>Signup</h1>
      <TextField
        id="outlined-basic"
        type="text"
        label="Username"
        variant="outlined"
        className='login-input'
        value={values.username}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
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
        onClick={signupFunc}
      >
        Signup
      </Button>
    </div>
  )
}

export default Signup