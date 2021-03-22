import React from "react";
import "./App.css";
import Addtodo from "./components/Addtodo/Addtodo";
import List from "./components/List/List";
function App() {
  return (
    <div className="App">
      <h2>My To Do List</h2>
      <Addtodo />
      <List />
    </div>
  );
}

export default App;
