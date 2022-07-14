import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div id="navBar">
      <div className='navBar left'>
        <button onClick={() => navigate("/")}>Browse All</button>
        <button onClick={() => navigate("/users")}>Find User</button>
      </div>

      <div className='navBar right'>
        {user ?
          <>
            <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
            <img id="tinyProfileImage" src={user.picture} onClick={() => navigate("/login")} />
          </> 
        :
          <button onClick={() => loginWithRedirect()}>Log In</button>
        }
      </div>
    </div>
  )
}
