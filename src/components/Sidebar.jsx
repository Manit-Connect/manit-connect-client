import { HomeOutlined } from '@mui/icons-material'
import React from 'react'
import SidebarLink from './SidebarLink'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarLink Icon={<HomeOutlined />} label='Home' />
      <SidebarLink Icon={<HomeOutlined />} label='Aaroha' />
      <SidebarLink Icon={<HomeOutlined />} label='Pixel' />
    </div>
  )
}

export default Sidebar