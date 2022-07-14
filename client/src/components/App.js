import User from './User'
import ContextMenu from './ContextMenu'
import UserList from './UserList'
import Home from './Home'
import NavBar from './NavBar'
import Project from './Project'
import Profile from './Profile'
import Login from './Login'
import ShowcaseEditor from './ShowcaseEditor'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div id="app">
      <div id="contextMenuWrapper">
        <ContextMenu />
      </div>
      <div id="contentWrapper">
        <NavBar />
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/users/:user_id/showcases/:id" element={<Project />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/showcases/new" element={<ShowcaseEditor />} />
            <Route path="/showcases/:id/edit" element={<ShowcaseEditor />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;