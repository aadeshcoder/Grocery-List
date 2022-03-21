import "./App.css";
import { useState } from "react";
import Header from "./Components/Grocery_List/Header";
import AddItem from "./Components/Grocery_List/AddItem";
import SearchItem from "./Components/Grocery_List/SearchItem";
import Main from "./Components/Grocery_List/Main";
import Footer from "./Components/Grocery_List/Footer";
function App() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    console.log(newItem);
    setNewItem("");
  };

  const setAndSaveItems = (newItems) => {
    setList(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = list.length + 1;
    const myNewItem = { id, task: item, isComplete: false };
    const listItems = [...list, myNewItem];
    setAndSaveItems(listItems)
  };

  const handleChange = (id) => {
    console.log(id);
    const listItem = list.map((item) =>
      item.id === id ? { ...item, isComplete: !item.isComplete } : item
    );
    setAndSaveItems(listItem);
  };

  const handleDelete = (id) => {
    console.log("Delete Item of id", id);
    const remainingItem = list.filter((item) => item.id !== id);
    setAndSaveItems(remainingItem);
  };

  const title = "Grocery List App";
  return (
    <div className="App">
      <Header title={title} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <Main
        list={list.filter(item =>((item.task).toLowerCase()).includes(search.toLowerCase()))}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer list={list} />
    </div>
  );
}

export default App;
