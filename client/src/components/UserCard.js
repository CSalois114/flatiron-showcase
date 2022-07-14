import React from 'react'
import noUserImg from '../images/no_user.png'
import { useNavigate } from 'react-router-dom';

export default function UserCard({ user }) {

  const navigate = useNavigate();

  if(!user.user_info){
    return <></>
  } 

  return (
    <div className='userCard' onClick={() => navigate(`/users/${user.id}`)}> 
      <img className='cardUserImage' src={user.image || noUserImg} alt="User Image"/>
      <div className='userInfo'>
        <p className='name'>{user.name}</p>
        <p className='location'>{user.user_info.location}</p> 
      </div>
    </div>
  )
}
