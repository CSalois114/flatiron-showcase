import UserCard from './UserCard'
import SearchBar from './SearchBar'
import ContextMenu from './ContextMenu'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setContent } from "../features/content"


function App() {

  const contentArr = useSelector((state) => state.content.value);
  const skillFilters = useSelector((state) => state.skills.value.filters)
  const dispatch = useDispatch();

  const filteredContent = (filterType, filters) => {
      if(filters[0]) {
        return contentArr.filter(content => (
          filters.every(filter => (
            content[filterType].some(contentAtr => (
              contentAtr.id === filter.id)))
          )
        )
      )
      } else {
        return contentArr
      }
  }

  useEffect(() => {
    fetch("/users")
    .then(r => r.json())
    .then(users => dispatch(setContent(users)))
  }, [])
  
  return (
    <div id="app">
      <div id="contextMenuWrapper">
        <ContextMenu />
      </div>
      <div id="contentWrapper">
        <SearchBar />
        <div id="content">
          { filteredContent("skills", skillFilters).map(user => <UserCard key={user.id} user={user} />) }
        </div>
      </div>
    </div>
  );
}

export default App;