import React from 'react'
import Postcard from './Postcard'

const Content = ({ posts }) => {
  return (
    <div className='content'>
      {posts.map((post, index) => (
        <Postcard
          key={index}
          post={post}
        />
      ))}
    </div>
  )
}

export default Content