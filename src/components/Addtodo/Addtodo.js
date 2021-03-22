import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";
import "./Addtodo.css";
const Addtodo = (props) => {
  return (
    <form
      className="submitButton"
      onSubmit={(event) => {
        event.preventDefault();
        let input = event.target.userInput.value;
        if (input !== "") {
          props.dispatch(addTodo(input));
          event.target.userInput.value = "";
        }
      }}
    >
      <input type="text" name="userInput" placeholder="Add to your list" />
      <button className="btn">Submit</button>
    </form>
  );
};
export default connect()(Addtodo);
