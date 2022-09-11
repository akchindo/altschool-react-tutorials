import React from "react";
import '../assets/styles/list.css'

const ListComponent = () => {
  const items = ["Tesla", "Audi", "BMW", "Mercedes", "Volkswagen"];

  const listItems = items.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return (
    <div>
      <ul className="sample">{listItems}</ul>
    </div>
  );
};

export default ListComponent;
