// import { addTodo } from "../actions";

const initialState = {
  data: [],
};
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Todo":
      return {
        ...state,
        data: [
          ...state.data,
          {
            message: action.message,
            id: action.id,
          },
        ],
      };
    case "Remove_Todo":
      const todos = state.data.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        data: todos,
      };

    default:
      return state;
  }
};
export default todos;
