import React from 'react'
import UserCard from "./UserCard"
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../features/users"
import { setSkills } from "../features/skills"

export default function UserList() {
  const users = useSelector((state) => state.users.value);
  const skillFilters = useSelector((state) => state.skills.value.filters)
  const dispatch = useDispatch();

  const filteredUsers = (filterType, filters) => {
      if(filters[0]) {
        return users.filter(content => (
          filters.every(filter => (
            content[filterType].some(contentAtr => (
              contentAtr.id === filter.id)))
          )
        )
      )
      } else {
        return users
      }
  }

  useEffect(() => {
    fetch("/users")
    .then(r => r.json())
    .then(users => dispatch(setUsers(users)))

    fetch("/skills")
    .then(r => r.json())
    .then(data => dispatch(setSkills(data)))
  }, [])
  
  return (
    <div>
      { filteredUsers("skills", skillFilters).map(user => (
        <UserCard 
          key={user.id} 
          user={user} 
        />
      )) }  
    </div>
  )
}
