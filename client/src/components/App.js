import User from './User'
import SearchBar from './SearchBar'
import ContextMenu from './ContextMenu'
import UserList from './UserList'
import ShowcaseList from './ShowcaseList'
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setShowcases } from '../features/showcases'
import { setUsers } from '../features/users'

function App() {
  const showcases = useSelector(state => state.showcases.value)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/showcases')
    .then(r => r.json())
    .then(data => dispatch(setShowcases(data)))

    fetch('/users')
    .then(r => r.json())
    .then(data => dispatch(setUsers(data)))
  }, [])

  return (
    <div id="app">
      <div id="contextMenuWrapper">
        <ContextMenu />
      </div>
      <div id="contentWrapper">
        <SearchBar />
        <div id="content">
          <Routes>
            <Route path="/" element={<ShowcaseList showcases={showcases} />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<User />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;