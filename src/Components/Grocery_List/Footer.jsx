import React from "react";
import "./Style.css";

const Footer = ({list}) => {
  return (
  <footer>
    <h3>List has {list.length} {list.length === 1 ? "item!":"items!"}</h3>  
  </footer>
  );
};

export default Footer;
