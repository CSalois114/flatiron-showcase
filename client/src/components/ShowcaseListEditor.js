import React from 'react'
import { useSelector } from 'react-redux'
import ShowcaseCardEditor from './ShowcaseCardEditor'
export default function ShowcaseListEditor() {
  const filters = useSelector(state => state.skills.value.filters)
  const showcases = useSelector(state => state.showcases.value)
  // const blankShowcase = {
  //   name: "",
  //   description: "",
  //   url: null,
  //   kind: "",
  //   position: null,
  //   preview_image: "",
  //   videos: [],
  //   repositories: [],
  //   skills: []
  // }

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
      {filteredShowcases()?.map((showcase, i) => (
        <ShowcaseCardEditor key={showcase.id} showcaseProp={showcase} position={i}/>
      ))}
    </div>
  )
}