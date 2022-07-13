import User from './User'
import ContextMenu from './ContextMenu'
import UserList from './UserList'
import Home from './Home'
import NavBar from './NavBar'
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
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<User />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;