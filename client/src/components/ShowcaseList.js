import React from 'react'
import BlogCard from './BlogCard'
import ProjectCard from './ProjectCard'

export default function ShowcaseList({ showcases }) {
  
  const createShowcaseElement = showcase => {
    if(showcase.kind === "blog"){
      return <BlogCard key={showcase.id} blog={showcase} />
    } else {
      return <ProjectCard key={showcase.id} project={showcase} />
    }
  }

  return (
    <div>
      {showcases?.map(showcase => createShowcaseElement(showcase))}
    </div>
  )
}
