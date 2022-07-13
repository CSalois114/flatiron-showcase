import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUsers } from '../features/users'

export default function SearchBar() {
  const [searchField, setSearchField] = useState("");
  const [searchType, setSearchType] = useState("users")
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setSearchField(e.target.value)
    const searchUrl = e.target.value ? `/search/${e.target.value}` : ""
    fetch(`/${searchType}${searchUrl}`)
    .then(r => r.json())
    .then(data => dispatch(setUsers(data)))
  }
  return (
    <div id="searchBar" >
      <input
        type="text" 
        onChange={handleChange}
        value={searchField}
      />
    </div>
  )
}