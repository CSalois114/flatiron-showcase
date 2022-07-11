import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setContent } from '../features/content'

export default function SearchBar() {
  const [searchField, setSearchField] = useState("");
  const [searchType, setSearchType] = useState("users")
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setSearchField(e.target.value)
    const searchUrl = e.target.value ? `/search/${e.target.value}` : ""
    fetch(`/${searchType}${searchUrl}`)
    .then(r => r.json())
    .then(content => dispatch(setContent(content)))
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