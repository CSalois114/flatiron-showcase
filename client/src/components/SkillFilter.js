import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addFilter, removeFilter, clearFilters } from "../features/skills";

export default function SkillFilter() {
  const [numOfSkills, setNumOfSkills] = useState(10)
  const [searchTerm, setSearchTerm] = useState("")
  const skills = useSelector((state) => state.skills.value.filteredSkills);
  const filters = useSelector((state) => state.skills.value.filters);
  const dispatch = useDispatch();

  const incrementSkills = () => setNumOfSkills(numOfSkills + 5)

  const handleAddFilterClick = skill => {
    setSearchTerm("")
    dispatch(addFilter(skill));
  }

  return (
    <div id="skillFilter">

      <h4>Filter By Skills Used</h4>

      {filters[0] && <button onClick={() => dispatch(clearFilters())}>Clear Filters</button>}

      <div id="filterSkillsWrapper">
        {filters.map(skill => (
          <div
            className='skill added'
            key={skill.id}
            onClick={() => dispatch(removeFilter(skill))}
            >- <span>{skill.name}</span>
          </div>
        ))}
      </div>

      {skills[0] && <div id="skillsSearchWrapper">
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search Skills" value={searchTerm} />
      </div>}

      <div id="skillsListWrapper">
        {skills?.filter(skill => skill.name?.includes(searchTerm)).slice(0, numOfSkills).map(skill => (
          <div
            className='skill notAdded'
            key={skill.id}
            onClick={() => handleAddFilterClick(skill)}
            >+ <span>{skill.name}</span>
          </div>
        ))}
      </div>
      
      {skills?.length > numOfSkills ? <button onClick={incrementSkills}>Show More</button> : null }
    </div>
  )
}
