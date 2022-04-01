import React from 'react'

const SidebarLink = ({ Icon, label }) => {
  return (
    <div className='sidebarlink'>
      {Icon}
      <span>{label}</span>
    </div>
  )
}

export default SidebarLink