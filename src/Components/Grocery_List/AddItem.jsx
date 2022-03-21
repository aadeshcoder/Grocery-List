import { FaPlus } from "react-icons/fa"
import React from 'react'
import { useRef } from "react"

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef(null)
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem"></label>
        <input 
            autoFocus
            type="text"
            id='addItem'
            placeholder='Add Item'
            required
            value = {newItem}
            onChange = {(e)=> setNewItem(e.target.value)}
            ref = {inputRef}
        />
        <button
            area-label = "Add Item"
            type='submit'
            onClick={()=>inputRef.current.focus()}
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem