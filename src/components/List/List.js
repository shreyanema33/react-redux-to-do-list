import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../../actions";
import "../Addtodo/Addtodo.css";
const List = (props) => {
  return (
    <ul>
      {props.todo.map((todo, index) => (
        <li key={index}>
          {todo.message}
          <button
            className="btn2"
            onClick={() => props.dispatch(removeTodo(todo.id))}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};
const mapStateToProps = (state) => ({
  todo: state.todo.data,
});

export default connect(mapStateToProps)(List);
