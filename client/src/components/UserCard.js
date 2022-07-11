import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function UserCard({ user }) {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/users/${user.id}`)}> 
      <p>{user.first_name + " " + user.last_name}</p>
    </div>
  )
}
