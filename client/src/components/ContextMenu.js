import React from 'react'
import SkillFilter from './SkillFilter'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ContextMenu() {
  const skills = useSelector(state => state.skills.value)
  const isSkills = skills.filters.concat(skills.filteredSkills).length > 0
  const navigate = useNavigate();
  
  return (
    <div id="contextMenu" >
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/users")}>Users</button>
      menu
      {isSkills && <SkillFilter />}
    </div>
  )
}
