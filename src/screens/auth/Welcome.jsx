import { Avatar, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import welcome from '../../assets/lottie/welcome.json'

const Welcome = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: welcome,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="welcome">
      <h1>Welcome to Manit Connect</h1>
      {/* <Avatar
        sx={{ height: 100, width: 100, marginBottom: 12, marginTop: 12 }}
        className='welcome-avatar'
      /> */}
      <Lottie
        options={defaultOptions}
        height={400}
        width={500}
      />
      <div className='welcome-buttons'>
        <Button onClick={() => navigate('/login')} variant="contained">Login</Button>
        <Button onClick={() => navigate('/signup')} variant="contained">Signup</Button>
      </div>
    </div>
  )
}

export default Welcome