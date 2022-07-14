import React from 'react'

export default function Video({ video }) {
  const source = "https://www.youtube.com/embed/" + video.url.split("v=")[1]

  return (
    <div className='videoWrapper'> 
      <h4>{video.name}</h4>
      <iframe 
        src={source}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      >
      </iframe>
    </div>
  )
}
