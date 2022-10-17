import React from "react";
import { useContext } from "react";
import { CatContext } from "./App";

export default function CategoryCard(props) {
  const { icon, title } = props;
  const { cat, setCat } = useContext(CatContext);
  return (
    <div>
      {" "}
      <div
        onClick={() => {
          setCat(title);
        }}
        className="category-card"
      >
        <i className={icon}></i>
        <p>{title}</p>
      </div>
    </div>
  );
}
