import React from 'react'
import user from '../features/user'
import noUserImg from '../images/no_user.png'  

export default function MenuUser({ user }){

  return (
    <div>
      <img id='userImage' src={user.image || noUserImg} alt="User Image"/>
      <h4 id="userName">{user.first_name + " " + user.last_name}</h4>
      <p id="userLocation">{user.user_info.location}</p>
      <p id="userEmail">{user.user_info.email}</p>
      <p id="userPhone">{user.user_info.phone_number}</p>
      <div id="userLinks">
        {user.user_info.social_links.map(link => (
          <p className='socialLink' key={link.id}><a href={link.url}>{link.name}</a></p>)
        )}
      </div>
    </div>
  )
}
