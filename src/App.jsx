// import .jsx elements and modules
import { Fragment, useEffect, useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

// function(class) App
function App() {
  // creating constant todos, with function setTodos, and applying useState hook
  const [todos, setTodos] = useState(() => {
    // creating variable/constant which gets all items from local storage - "ITEMS"
    const localValue = localStorage.getItem("ITEMS");
    // returns an empty array if localValue is null
    if (localValue == null) return [];

    // returns json request in localValue
    return JSON.parse(localValue);
  });

  // using everytime when [todos] is changed
  useEffect(() => {
    // creates localStorage ("ITEMS"), and pushing all todos in
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  // pushing input value in args of the function
  function addTodo(title) {
    // using "setTodos" for creating each one "Todo"
    setTodos((currentTodos) => {
      // returns array
      return [
        // spreaded out(copied array which creates when creating new todo)
        ...currentTodos,
        // assigns random id, title(input value) and complete status
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  // function which executes when checkbox toggled, and gets id and complete status of unique todo
  function toggleTodo(id, completed) {
    // updates todo with unique id
    setTodos((currentTodos) => {
      // returns map(array) of todos/todo
      return currentTodos.map((todo) => {
        // if todo same id with todo.id (eventObj)
        if (todo.id === id) {
          // return todo with class "completed"
          return { ...todo, completed };
        }
        // returns updated todo
        return todo;
      });
    });
  }

  // functions which executes when clicked on "delete" button for spec id
  function deleteTodo(id) {
    // pop up confirm window
    confirm("Do you really want delete this item?");
    // if user clicked "Yes", return...
    if (window.confirm) {
      setTodos((currentTodos) => {
        return currentTodos.filter((todo) => todo.id !== id);
      });
    }
  }

  return (
    <Fragment>
      <NavBar />
      {/* assigns "onSubmit" method with function "addTodo" for \.TodoForm\ */}
      <div className="form-div">
        <TodoForm onSubmit={addTodo} />
        <h1 className="header">Todo List</h1>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </Fragment>
  );
}

export default App;
