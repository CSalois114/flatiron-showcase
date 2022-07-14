import React from 'react'
import noUserImg from '../images/no_user.png'  
import { useNavigate } from 'react-router-dom'

export default function MenuUserEditor({ user }){
  const navigate = useNavigate()

  const email = user.user_info?.email
  const location = user.user_info?.location
  const phoneNumber = user.user_info?.phone_number

  return (
    <div id="menuUserWrapper">
      <div id="menuUser" onClick={() => navigate(`/users/${user.id}`)}>
        <img id='userImage' src={user.image || noUserImg} alt="User Image"/>
        <h4 id="userName">{user.name}</h4>
      </div>
      <div id="userInfo">
        {location && <p id="userLocation">{location}</p>}
        {email && <a id="userEmail" href={`mailto: ${email}`}>{email}</a>}
        {phoneNumber && <p id="userPhone">{phoneNumber}</p>}
      </div>
      <div id="userLinks">
        <h4 id="userLinksHeader">My Links</h4>
        {user.user_info?.social_links.map(link => (
          <p 
            className='socialLink' 
            key={link.id}
            onClick={() => window.open(link.url)}
          >
              {link.name}
          </p>)
        )}
      </div>
      <div id="aboutMeWrapper">
        <h4 id="aboutMeHeader">About Me</h4>
        <p id="aboutMe">{user.user_info?.about_me}</p>
      </div>
    </div>
  )
}