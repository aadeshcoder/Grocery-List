import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()} className = "searchForm">
        <label htmlFor="search">Search</label>
        <input 
            type="text" 
            id='search'
            placeholder='Search Item'
            role= "searchbox"
            value = {search}
            onChange = {(e)=>setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem