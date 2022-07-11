import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/user"
import { setSkills } from "../features/skills"
import { clearUser } from '../features/user';

export default function User() {
  const user = useSelector(state => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser({}))

    const userId = window.location.pathname.split("/")[2]
    fetch(`/users/${userId}`)
    .then(r => r.json())
    .then(userData => {
      dispatch(setUser(userData))
      dispatch(setSkills(userData.skills))
    })

    return () => dispatch(clearUser())
  }, [])

  return (
    <div>
      {user.first_name}
    </div>
  )
}
