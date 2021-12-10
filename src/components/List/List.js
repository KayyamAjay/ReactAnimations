import React from "react";
import "./List.css";

const List = () => {
  const [items, setItem] = React.useState([1, 2, 3]);
  const addItemHandler = () => {
    setItem((prev) => {
      return prev.concat(prev.length + 1);
    });
  };
  const removeItemHandler = (index) => {
    setItem((prev) => {
      const list = prev.filter((item, i) => i !== index);
      return list;
    });
  };

  const listItems = items.map((item, index) => {
    return (
      <li
        key={index}
        className="ListItem"
        onClick={() => {
          removeItemHandler(index);
        }}
      >
        {item}
      </li>
    );
  });

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <ul className="List">{listItems}</ul>
    </div>
  );
};
export default List;
