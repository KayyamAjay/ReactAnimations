import React from "react";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import "./App.css";

const App = () => {
  const [show, setShow] = React.useState(false);
  const showHandler = () => {
    setShow(true);
    console.log("clicked");
  };
  const closeHandler = () => {
    setShow(false);
    console.log("clicked");
  };
  return (
    <div className="App">
      <h1>React Animations</h1>
      <Modal closed={closeHandler} show={show} />
      <Backdrop show={show} />
      <button className="Button" onClick={showHandler}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;
