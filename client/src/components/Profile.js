import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from '../features/user';
import { setSkills, clearSkills } from '../features/skills';

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSkills())
    dispatch(clearUser())
    const getUserData = async () => {
      const domain = "dev-s088tu6z.us.auth0.com";
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: "https://flatiron-showcase/api/",
          scope: "read:current_user",
        });
        
        fetch(`/profile/${user.sub}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(r => {
          if(!r.ok){
            fetch(`/profile`, {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
              method: "POST",
              body: JSON.stringify({ 
                user: {
                  name: user.name,
                  image: user.picture,
                  sub: user.sub
                },
                user_info: {
                  email: user.email
                }
              })
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              dispatch(setUser(data))
              dispatch(setSkills(data.skills))
            })
          } else {
             r.json()
             .then(data => {
              console.log(data)

              dispatch(setUser(data))
              dispatch(setSkills(data.skills))
             })
          }
        })

      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserData();
  }, [getAccessTokenSilently, user?.sub]);

  

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.sub}</p>
      </div>
    )
  );
};

export default Profile;