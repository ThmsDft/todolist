import React from "react";
import Item from "./Item";

function List({ list }) {
  return (
    <div className="list">
      {list.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;
