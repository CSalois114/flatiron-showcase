import React from 'react'
import BlogCard from './BlogCard'
import ProjectCard from './ProjectCard'
import { useSelector } from 'react-redux'
export default function ShowcaseList({ showcases }) {
  const filters = useSelector(state => state.skills.value.filters)
  const filteredShowcases = () => {
    if(filters[0]) {
      return showcases.filter(showcase => (
        filters.every(filter => (
          showcase.skills.some(skill => (
            skill.id === filter.id)))
        )
      )
    )
    } else {
      return showcases
    }
} 

  const createShowcaseElement = showcase => {
    if(showcase.kind === "blog"){
      return <BlogCard key={showcase.id} blog={showcase} />
    } else {
      return <ProjectCard key={showcase.id} project={showcase} />
    }
  }

  return (
    <div>
      {filteredShowcases()?.map(showcase => createShowcaseElement(showcase))}
    </div>
  )
}
