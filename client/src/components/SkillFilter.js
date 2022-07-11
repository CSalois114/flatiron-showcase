import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setSkills, addFilter, removeFilter, clearFilters } from "../features/skills";

export default function SkillFilter() {
  const [numOfSkills, setNumOfSkills] = useState(5)
  const skills = useSelector((state) => state.skills.value.filteredSkills);
  const filters = useSelector((state) => state.skills.value.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/skills")
    .then(r => r.json())
    .then(data => dispatch(setSkills(data)))
  }, [])

  const incrementSkills = () => setNumOfSkills(numOfSkills + 3)

  return (
    <div id="skillFilter">
      <input type="text" />
      {filters.map(skill => (
        <div
          key={skill.id}
          onClick={() => dispatch(removeFilter(skill))}
          >- {skill.name}
        </div>
      ))}
      <h4>Popular Skills</h4>
      {skills.slice(0, numOfSkills).map(skill => (
        <div
          key={skill.id}
          onClick={() => dispatch(addFilter(skill))}
          >+ {skill.name}
        </div>
      ))}
      {skills.length >= numOfSkills ? <button onClick={incrementSkills}>Show More</button> : null }
    </div>
  )
}
