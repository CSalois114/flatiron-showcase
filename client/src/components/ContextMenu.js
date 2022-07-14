import React from 'react'
import SkillFilter from './SkillFilter';
import MenuUser from './MenuUser';
import MenuUserEditor from './MenuUserEditor';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'

export default function ContextMenu() {
  const skills = useSelector(state => state.skills.value)
  const user = useSelector(state => state.user.value)
  const [isEditingMode, setIsEditingMode] = useState(false)
  const toggleEditingMode = () => setIsEditingMode(!isEditingMode)

  const isSkills = skills.filters.concat(skills.filteredSkills).length > 0
  const canEdit = window.location.pathname.split("/")[1] === "profile"

  useEffect(() => {
    return () => setIsEditingMode(false)
  }, [])
  
  return (
    <div id="contextMenu" >
      {user.name && ( isEditingMode ? <MenuUserEditor user={user} toggleEditingMode={toggleEditingMode}/> : <MenuUser user={user} />)}
      {canEdit && !isEditingMode && <button className='menuEditButton' onClick={toggleEditingMode}>Edit</button>}
      {isSkills && <SkillFilter />}
    </div>
  )
}
