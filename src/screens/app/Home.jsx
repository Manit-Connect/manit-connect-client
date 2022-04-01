import React from 'react'
import Content from '../../components/Content'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'

const Home = () => {
  return (
    <div className='home'>
      <Topbar />
      <div className="home-body">
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default Home