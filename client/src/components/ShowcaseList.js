import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearSkills } from '../features/skills'

export default function ShowcaseList() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearSkills())
  }, [])

  return (
    <div>
      ShowcaseList
    </div>
  )
}
