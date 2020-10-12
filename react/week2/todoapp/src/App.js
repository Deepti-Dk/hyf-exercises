import React, { useState } from 'react';
import './App.css';
// import Search from './SearchInput';
import TimerUseEffect from './Counter';
// import './MyComponent';
// import MyComponent from './MyComponent';
// import MyFuncComponent from './MyFuncComponent';

//COUNTER
function App() {
  return (
    <div>
      <TimerUseEffect />
    </div>
  );
}

//SEARCH INPUT
// function App() {
//   const [input, setInput] = useState(' ');
//   const searchValue = (e) => {
//     const value = e.target.value;
//     setInput(value);
//   };
//   return (
//     <div className="App">
//       <input type="text" onChange={searchValue} />
//       <Search input={input} />
//     </div>
//   );
// }

//PREP EXAMPLE
// const TodoHeader = (props) => {
//   const { text } = props;
//   return <h2>{text}</h2>;
// };

// const TodoListRow = (props) => {
//   const { todo } = props;
//   return <li>{todo}</li>;
// };

// const TodoList = (props) => {
//   const { todos, headerText } = props;
//   return (
//     <div>
//       <TodoHeader text={headerText} />
//       <ul>
//         {todos.map((todo) => {
//           return <TodoListRow key={todo} todo={todo} />;
//         })}
//       </ul>
//     </div>
//   );
// };

// const todoArray = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4'];
// function App() {
//   const [todos, setTodos] = useState(todoArray);
//   const [isVisible, setIsVisible] = useState(true);
//   const [test, setTest] = useState(0);

//   const onButtonClick = () => {
//     const arrayLen = todos.length;
//     const myNextTodoName = `Todo ${arrayLen + 1}`;
//     const myNextTodos = todos.concat(myNextTodoName);
//     setTodos(myNextTodos);
//   };

//   const onUnMount = () => {
//     setIsVisible(!isVisible);
//   };

//   const onUpdate = () => {
//     setTest(test + 1);
//   };

//   return (
//     <div className="App">
//       <div>
//         <TodoList todos={todos} headerText="Todo list" />
//         <button onClick={onButtonClick}>Add a new todo</button>
//       </div>
//       <button onClick={onUnMount}>Unmount</button>
//       <button onClick={onUpdate}>Update</button>

//       {isVisible && <MyComponent test={test} />}

//       {isVisible && <MyFuncComponent test={test} />}
//     </div>
//   );
// }

export default App;
