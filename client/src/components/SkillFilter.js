import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setSkills, addFilter, removeFilter, clearFilters } from "../features/skills";

export default function SkillFilter() {
  const [numOfSkills, setNumOfSkills] = useState(5)
  const [searchTerm, setSearchTerm] = useState("")
  const skills = useSelector((state) => state.skills.value.filteredSkills);
  const filters = useSelector((state) => state.skills.value.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/skills")
    .then(r => r.json())
    .then(data => dispatch(setSkills(data)))
  }, [])

  const incrementSkills = () => setNumOfSkills(numOfSkills + 3)

  const handleAddFilterClick = skill => {
    dispatch(addFilter(skill));
    setSearchTerm("")
  }

  return (
    <div id="skillFilter">

      {filters[0] && <button onClick={() => dispatch(clearFilters())}>Clear Filters</button>}

      <div id="filterSkillsWrapper">
        {filters.map(skill => (
          <div
            key={skill.id}
            onClick={() => dispatch(removeFilter(skill))}
            >- {skill.name}
          </div>
        ))}
      </div>

      <div id="skillsSearchWrapper">
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search Skills"/>
      </div>

      <div id="skillsListWrapper">
        {skills.filter(skill => skill.name?.includes(searchTerm)).slice(0, numOfSkills).map(skill => (
          <div
            key={skill.id}
            onClick={() => handleAddFilterClick(skill)}
            >+ {skill.name}
          </div>
        ))}
      </div>
      
      {skills.length > numOfSkills ? <button onClick={incrementSkills}>Show More</button> : null }
    </div>
  )
}
