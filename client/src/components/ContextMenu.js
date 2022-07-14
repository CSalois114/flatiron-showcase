import React from 'react'
import SkillFilter from './SkillFilter';
import MenuUser from './MenuUser';
import MenuUserEditor from './MenuUserEditor';
import { useSelector } from 'react-redux';

export default function ContextMenu() {
  const skills = useSelector(state => state.skills.value)
  const user = useSelector(state => state.user.value)

  const isSkills = skills.filters.concat(skills.filteredSkills).length > 0
  const isEditor = window.location.pathname.split("/")[1] === "profile"

  
  return (
    <div id="contextMenu" >
      
      {user.name && ( isEditor ? <MenuUserEditor user={user} /> : <MenuUser user={user} />)}
      {isSkills && <SkillFilter />}
    </div>
  )
}
