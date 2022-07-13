import User from './User'
import ContextMenu from './ContextMenu'
import UserList from './UserList'
import Home from './Home'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div id="app">
      <div id="contextMenuWrapper">
        <ContextMenu />
      </div>
      <div id="contentWrapper">
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