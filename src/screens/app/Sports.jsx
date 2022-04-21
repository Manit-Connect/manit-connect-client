import { Fab } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Content from '../../components/Content'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom'
import { apiUrl } from '../../utils/constant'
import { useAppSelector } from '../../app/hooks'
import { selectUser } from '../../features/user/userSlice'
const Sports = () => {
  return (
    <div className='sports'>
      <Topbar />
      <div className="home-body">
        {/* <Sidebar /> */}
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

export default Sports