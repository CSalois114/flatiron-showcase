import React from 'react'

export default function BlogCard({ blog }) {
  return (
    <div className='blogCard'>
      <img className='previewImageCard' src={blog.preview_image} />
      <p>Blog</p>
    </div>
  )
}
