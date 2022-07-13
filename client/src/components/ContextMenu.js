import React from 'react'
import SkillFilter from './SkillFilter';
import MenuUser from './MenuUser';
import { useSelector } from 'react-redux';

export default function ContextMenu() {
  const skills = useSelector(state => state.skills.value)
  const user = useSelector(state => state.user.value)
  const isSkills = skills.filters.concat(skills.filteredSkills).length > 0
  
  return (
    <div id="contextMenu" >
      
      {user.first_name && <MenuUser user={user} />}
      {isSkills && <SkillFilter />}
    </div>
  )
}
