import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("/users")
    .then(r => r.json())
    .then(setUsers)
  }, [])
  
  return (
    <div className="App">
      {users.map(user => <div>{user.first_name}</div>)}
    </div>
  );
}

export default App;
