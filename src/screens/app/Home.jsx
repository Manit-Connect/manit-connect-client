import { Fab } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Content from '../../components/Content'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const handleFabClick = () => {
    navigate('/create')
  }
  const getPosts = () => {
    fetch('http://localhost:5000/posts')
      .then(res => res.json())
      .then(posts => setPosts(posts))
  }
  useEffect(() => {
    getPosts()
    setLoading(false)
  }, [])
  return (
    <div className='home'>
      <Topbar />
      <div className="home-body">
        <Sidebar />
        {loading ? (
          <div className="loading">
            <div className="loading-icon">
              <AddIcon />
            </div>
            <div className="loading-text">
              Loading...
            </div>
          </div>
        ) : (
          <Content posts={posts} />
        )}
      </div>
      <Fab className='fab-bottom' variant="extended" color="primary" aria-label="add" onClick={handleFabClick}>
        <AddIcon sx={{ mr: 1 }} />
        Create Post
      </Fab>
    </div>
  )
}

export default Home