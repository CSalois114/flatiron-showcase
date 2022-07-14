import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setShowcases } from '../features/showcases'
import { setSkills, clearSkills } from '../features/skills'
import { clearUser } from "../features/user"
import ShowcaseList from './ShowcaseList'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearSkills())
    dispatch(setShowcases([]))
    dispatch(clearUser())

    fetch('/showcases')
    .then(r => r.json())
    .then(data => dispatch(setShowcases(data)))

    fetch('/skills')
    .then(r => r.json())
    .then(data => dispatch(setSkills(data)))
  }, [])

  return (
    <ShowcaseList/>
  )
}
