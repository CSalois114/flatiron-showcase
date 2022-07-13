import React from 'react'
import ShowcaseCard from './ShowcaseCard'
import { useSelector } from 'react-redux'
export default function ShowcaseList() {
  const filters = useSelector(state => state.skills.value.filters)
  const showcases = useSelector(state => state.showcases.value)

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

  return (
    <div>
      {filteredShowcases()?.map(showcase => (
        <ShowcaseCard key={showcase.id} showcase={showcase} />
      ))}
    </div>
  )
}
