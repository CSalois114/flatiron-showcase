import React from 'react';
import ShowcaseList from './ShowcaseList';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/user";
import { setSkills } from "../features/skills";
import { setShowcases } from "../features/showcases"
import { clearUser } from '../features/user';

export default function User() {
  const user = useSelector(state => state.user.value);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setUser({}))
    dispatch(setShowcases([]))

    const userId = window.location.pathname.split("/")[2]
    fetch(`/users/${userId}`)
    .then(r => r.json())
    .then(userData => {
      dispatch(setUser(userData))
      dispatch(setSkills(userData.skills))
      dispatch(setShowcases(userData.showcases))
    })

    return () => dispatch(clearUser())
  }, [])

  return (
    <div>
      <ShowcaseList showcases={user.showcases} />
    </div>
  )
}
