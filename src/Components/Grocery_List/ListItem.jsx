import React from "react";
import LineItem from "./LineItem";

const ListItem = ({ list, handleChange, handleDelete }) => {
  return (
    <main>
      <ul className="listContainer" style={{ listStyleType: "none" }}>
        {list.map((item) => (
          <LineItem
            item={item}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </main>
  );
};
 
export default ListItem;
