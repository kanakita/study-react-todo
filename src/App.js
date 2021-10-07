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

  const [currentFilter, setCurrentFilter] = useState('all');

  /**
   * TODOを追加する
   * @param title
   */
  function addTodo(title) {
    const newTodo = {
      title: title,
      complete: false,
    };
    setTodos( [...todos, newTodo] );
  }

  /**
   * TODOを更新する
   * @param {number} index TODOのindex.
   * @param {boolean} complete TODOの状態
   */
  function updateTodo(index, complete) {
    todos[index].complete = complete;
    setTodos([...todos]);

  }

  /**
   * TODOを削除する
   * @param {number} index TODOのindex
   */
  function deleteTodo(index) {
    todos.splice(index, 1);
    setTodos([...todos]);
  }

  function filteredTodos() {
    return todos;
  }

  return (
    <>
      <Header />
      <AllComplete />
      <TodoInput onSubmit={addTodo} />
      <TodoList todos={filteredTodos()} onClickCheck={updateTodo} onClickDelete={deleteTodo} />
      <Footer onClickFilterButton={(filterName) => {
        setCurrentFilter(filterName)
      }} activeFilterButtonType={currentFilter} />
    </>
  );
}

export default App;
