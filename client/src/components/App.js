import UserCard from './UserCard'
import SearchBar from './SearchBar'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setContent } from "../features/content"


function App() {

  const content = useSelector((state) => state.content.value);
  const dispatch = useDispatch();

  // const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("/users")
    .then(r => r.json())
    .then(users => dispatch(setContent(users)))
  }, [])
  
  return (
    <div className="App">
      <div id="searchBar">
        <SearchBar />
      </div>
      <div id="content">
        { content.map(user => <UserCard key={user.id} user={user} />) }
      </div>
    </div>
  );
}

export default App;