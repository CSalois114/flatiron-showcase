import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setShowcases } from '../features/showcases'
import { setSkills } from '../features/skills'
import ShowcaseList from './ShowcaseList'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
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
