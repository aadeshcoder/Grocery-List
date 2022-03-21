import React from "react";

const LineItem = ({ item, handleChange, handleDelete }) => {
  return (
    <li className="listItems">
      <input
        type="checkbox"
        className="regular-checkbox"
        onChange={() => handleChange(item.id)}
        checked={item.isComplete}
      />
      <label
        style={item.isComplete ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleChange(item.id)}
      >
        {item.task.toUpperCase()}
      </label>

      <button onClick={() => handleDelete(item.id)} className="deleteBtn">
        Delete
      </button>
    </li>
  );
};

export default LineItem;
