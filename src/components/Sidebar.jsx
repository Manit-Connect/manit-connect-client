import { HomeOutlined } from '@mui/icons-material'
import React from 'react'
import SidebarLink from './SidebarLink'
import FoodBankIcon from '@mui/icons-material/FoodBank';
import CameraIcon from '@mui/icons-material/Camera';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link style={{ textDecoration: 'none', width: '100%' }} className='' to='/societies'>
        <SidebarLink Icon={<HomeOutlined />} label='Societies' />
      </Link>
      <Link style={{ textDecoration: 'none', width: '100%' }} className='' to='/administration'>
        <SidebarLink Icon={<FoodBankIcon />} label='Administration' />
      </Link>
      <Link style={{ textDecoration: 'none', width: '100%' }} className='' to='/academics'>
        <SidebarLink Icon={<CameraIcon />} label='Academics' />
      </Link>
      <Link style={{ textDecoration: 'none', width: '100%' }} className='' to='/sports'>
        <SidebarLink Icon={<CameraIcon />} label='Sports' />
      </Link>
    </div>
  )
}

export default Sidebar