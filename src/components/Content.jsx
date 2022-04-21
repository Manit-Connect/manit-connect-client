import React from 'react'
import Postcard from './Postcard'

const Content = ({ posts }) => {
  return (
    <div className='content'>
      {posts.map(post => (
        <Postcard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Content