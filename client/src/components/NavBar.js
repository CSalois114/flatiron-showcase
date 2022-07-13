import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className='navBar left'>
        <button onClick={() => navigate("/")}>Browse All</button>
        <button onClick={() => navigate("/users")}>Find User</button>
      </div>
      <div className='navBar right'>
        <button>Login</button>
      </div>
    </div>
  )
}
