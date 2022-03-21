import React from "react";
import ListItem from "./ListItem";
import "./Style.css";

const Main = ({ list, handleChange, handleDelete }) => {
  // console.log(list.length)
  return (
    <main>
     { list.length ? <ListItem 
        list = {list}
        handleChange = {handleChange}
        handleDelete = {handleDelete}
      /> : <b>list is empty</b>}
    </main>
  );
};

export default Main;
