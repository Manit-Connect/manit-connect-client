import { Button, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topbar from '../../components/Topbar'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Create } from '@mui/icons-material'

const initialValues = {
  title: '',
  content: '',
  commitee: ''
}

const commitee = [
  {
    value: "aaroha",
    label: "Aaroha"
  },
  {
    value: "pixel",
    label: "Pixel"
  },
  {
    value: 'iste',
    label: 'Iste'
  },
  {
    value: 'turyanad',
    label: 'Turyanad'
  },
  {
    value: 'robaroo',
    label: 'Robaroo'
  },
  {
    value: "quizzers",
    label: "Quizzers"
  },
  {
    value: "ieee",
    label: "IEEE"
  },
  {
    value: "vision",
    label: "Vision"
  },
  {
    value: "zenith",
    label: "Zenith"
  },
  {
    value: "aeseaenak",
    label: "Ae se aenak"
  },
  {
    value: "rotaract",
    label: "Rotaract"
  },
]

const CreatePost = () => {
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();
  const createPost = () => {
    fetch('https://tranquil-crag-17353.herokuapp.com/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: values.title,
        content: values.content,
        commitee: values.commitee,
        createdAt: new Date().toLocaleDateString()
      })
    }).then(res => res.json())
      .then(data => {
        if (data) {
          navigate('/home')
        }
      })
      .catch(err => console.log(err))
  }
  const handleCancel = () => {
    navigate('/home')
  }

  return (
    <div className="create-post">
      <Topbar />
      <div className="create-inputs">
        <Typography variant="h3" component="div" gutterBottom>
          Create a Post
        </Typography>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={values.title}
          margin="normal"
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        />
        <TextField
          fullWidth
          margin="normal"
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          values={values.content}
          onChange={(e) => setValues({ ...values, content: e.target.value })}
        />
        <TextField
          id="outlined-select-currency"
          select
          fullWidth
          label="Select"
          value={values.commitee}
          margin="normal"
          onChange={(e) => setValues({ ...values, commitee: e.target.value })}
          helperText="Please select your commitee"
        >
          {commitee.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className='create-buttons'>
          <Button
            variant="contained"
            onClick={createPost}
          >
            <Create />
            Create Post
          </Button>
          <Button
            variant="outlined"
            onClick={handleCancel}
          >
            <ArrowBackIosIcon />
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost