import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import AllComplete from "./components/AllComplete";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import {useState} from "react";


const initialTodos = [
  {
    title: 'しごと',
    complete: false
  },
  {
    title: 'あそぶ',
    complete: true
  },
  {
    title: '買い物',
    complete: true
  }
]

function App() {

  const [todos, setTodos] = useState(initialTodos);

  function addTodo(title) {
    const newTodo = {
      title: title,
      complete: false,
    };

    setTodos( [...todos, newTodo] );
  }

  return (
    <>
      <Header />
      <AllComplete />
      <TodoInput onSubmit={addTodo} />
      <TodoList todos={todos} />
      <Footer />
    </>
  );
}

export default App;
