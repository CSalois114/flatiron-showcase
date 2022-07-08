import React from 'react'

export default function UserCard({ user }) {
  return (
    <div> 
      <p>{user.first_name + " " + user.last_name}</p>
    </div>
  )
}
