import React from 'react'
import UserCard from "./UserCard"
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setContent } from "../features/content"
import { setSkills } from "../features/skills"

export default function UserList() {
  const contentArr = useSelector((state) => state.content.value);
  const skillFilters = useSelector((state) => state.skills.value.filters)
  const dispatch = useDispatch();

  const filteredContent = (filterType, filters) => {
      if(filters[0]) {
        return contentArr.filter(content => (
          filters.every(filter => (
            content[filterType].some(contentAtr => (
              contentAtr.id === filter.id)))
          )
        )
      )
      } else {
        return contentArr
      }
  }

  useEffect(() => {
    fetch("/users")
    .then(r => r.json())
    .then(users => dispatch(setContent(users)))

    fetch("/skills")
    .then(r => r.json())
    .then(data => dispatch(setSkills(data)))
  }, [])
  
  return (
    <div>
      { filteredContent("skills", skillFilters).map(user => (
        <UserCard 
          key={user.id} 
          user={user} 
        />
      )) }  
    </div>
  )
}
