import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import AllComplete from "./components/AllComplete";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import {useState} from "react";

function getUniqId() {
  return Math.random().toString(32).substring(2);
}

const initialTodos = [
  {
    title: 'しごと',
    complete: false,
    id: '123456789'
  },
  {
    title: 'あそぶ',
    complete: true,
    id: 'b'
  },
  {
    title: '買い物',
    complete: true,
    id: 'c'
  }
]

function App() {

  const [todos, setTodos] = useState(initialTodos);

  const [currentFilter, setCurrentFilter] = useState('all'); // 'all' ,'completed', 'active'

  /**
   * TODOを追加する
   * @param title
   */
  function addTodo(title) {
    const id = getUniqId();
    const newTodo = {
      title,
      complete: false,
      id
    };
    setTodos( [...todos, newTodo] );
  }

  /**
   * TODOを更新する
   * @param {string} id TODOのid
   * @param {boolean} complete TODOの状態
   */
  function updateTodo(id, complete) {

    const newTodos = todos.map( ( todo ) => {
      if ( id === todo.id ) {
        return {
          ...todo,
          complete,
        }
      }
      return todo;
    })

    setTodos(newTodos);
  }



  /**
   * TODOを削除する
   * @param {string} id TODOのid
   */
  function deleteTodo(id) {
    const newTodos = todos.filter(function (todo) {
      return todo.id !== id;
    })

    setTodos(newTodos);
  }

  /**
   *
   * @returns {({title: string, complete: boolean})[]} フィルタされた Todo の配列
   */
  function filteredTodos() {
    return todos.filter(function (todo) {
      if (currentFilter === 'completed') {
        return todo.complete;
      }
      else if(currentFilter === 'active'){
        return ! todo.complete;
      }

      return true;

    })
  }

  /**
   * completedのTODOを全削除する
   */
  function deleteCompleteAll() {
    const notCompleteTodo = todos.filter(function (todo) {
      return ! todo.complete;
    })
    setTodos(notCompleteTodo);
  }

  function setStatusAll( status ) {
    const newTodos = todos.map(function (todo) {
      return {
        ...todo,
        complete: status,
      }
    })
    setTodos(newTodos);
  }

  return (
    <>
      <Header />
      <AllComplete onChangeCompleteAll={setStatusAll} todos={todos} />
      <TodoInput onSubmit={addTodo} />
      <TodoList todos={filteredTodos()} onClickCheck={updateTodo} onClickDelete={deleteTodo} />
      <Footer
        itemNum={filteredTodos().length}
        onClickFilterButton={(filterName) => {
          setCurrentFilter(filterName)
        }}
        activeFilterButtonType={currentFilter}
        onClickDeleteCompleteAll={deleteCompleteAll}
      />
    </>
  );
}

export default App;
