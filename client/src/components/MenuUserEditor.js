import React from 'react'
import noUserImg from '../images/no_user.png' 
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/user'

export default function MenuUserEditor({ user, toggleEditingMode }){
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({})
  const[userObj, setUserObj] = useState(user)
  const [userInfo, setUserInfo] = useState({
    email: user.user_info?.email,
    location: user.user_info?.location || "",
    phone_number: user.user_info?.phone_number?.split("-").join("") || "",
    about_me: user.user_info?.about_me || "",
  })
  const [socialLinksArr, setSocialLinksArr] = useState(user.user_info?.social_links || [])
  const blankSocialLink = {
    name: "",
    url: ""
  }
  const [socialLink, setSocialLink] = useState(blankSocialLink)
  
  const handleSaveClick = () => {
    setErrors({})
    fetch(`/user_infos/${user.user_info.id}`, {
      headers: {
        "Content-type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ user_info: userInfo })
    })
    .then(res => {
      if(!res.ok){
        res.json().then(setErrors)
      } else {
        res.json()
        .then(setUserObj)
        .then(fetch(`/users/${user.id}`, {
          headers: {
            "Content-type": "application/json",
          },
          method: "PATCH",
          body: JSON.stringify({user: userObj  })
        })
        .then(res => {
          if(!res.ok){
            res.json().then(setErrors)
          } else {
            res.json()
            .then(data => dispatch(setUser(data)))
            .then(toggleEditingMode())
          }
        }))
      }
    })
  }

  const handleSaveLink = () => {
    setErrors({})
    if(!socialLink.name || !socialLink.url){
      setErrors({social_link: ["Both fields need to be filled out"]})
    } else {
      fetch(`/social_links`, {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({...socialLink, user_info_id: user.user_info.id})
      })
      .then(r => r.json())
      .then(data => {
        setSocialLinksArr([...socialLinksArr, data])
        setSocialLink({
          name: "",
          url: ""
        })
      })
    }
  }

  const deleteSocialLink = (e, id) => {
    e.stopPropagation()
    fetch(`/social_links/${id}`, {
    method: "DELETE"
  })
  .then(setSocialLinksArr(socialLinksArr.filter(link => link.id !== id)))
  }

  return (
    <>
    <div id="menuUserWrapper">
      <div id="menuUser">
        <img id='userImage' src={user.image || noUserImg} alt="User Image"/>
        <input onChange={(e) => setUserObj({...userObj, name: e.target.value})} value={userObj.name} placeholder='Name'/>
        {errors.name && <div className='error'>{errors.name.join(" ")}</div>}
        <input onChange={(e) => setUserInfo({...userInfo, location: e.target.value})} value={userInfo.location} placeholder="Location"/>
        <input onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} value={userInfo.email} placeholder="Email"/>
        {errors.email && <div className='error'>{errors.email.join(" ")}</div>}
        <input onChange={(e) => setUserInfo({...userInfo, phone_number: e.target.value})} value={userInfo.phone_number} placeholder="Phone Number"/>
        {errors.phone_number && <div className='error'>{errors.phone_number.join(" ")}</div>}
      </div>

  
      <div id="userLinks">
        <h4 id="userLinksHeader">My Links</h4>
        {socialLinksArr.map(link => (
          <p 
            className='socialLink ' 
            key={link.id}
            onClick={() => window.open(link.url)}
          >
              {link.name}
          <span onClick={(e) => deleteSocialLink(e, link.id)} className='deleteLink'>X</span>
          </p>)
        )}
        <input onChange={(e) => setSocialLink({...socialLink, name: e.target.value})} value={socialLink.name} placeholder="Website Name"/>
        <input onChange={(e) => setSocialLink({...socialLink, url: e.target.value})} value={socialLink.url} placeholder="URL"/>
        {errors.social_link && <div className='error'>{errors.social_link.join(" ")}</div>}
        <p
          className='socialLink'
          onClick={handleSaveLink}
        > {"Save Link"}</p>
      </div>

      <div id="aboutMeWrapper">
        <h4 id="aboutMeHeader">About Me</h4>
        <textarea id="editAboutMe" onChange={(e) => setUserInfo({...userInfo, about_me: e.target.value})} value={userInfo.about_me} placeholder="About me..."/>
      </div>
    </div>
    <button className='menuEditButton' onClick={handleSaveClick}>Save</button>
    </>
  )
}