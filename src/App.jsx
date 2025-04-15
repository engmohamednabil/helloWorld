import { useState } from 'react'
import './App.css'
import { NewFormItem } from './newFormItem'

function App() {
  
  const [todos, settodos] = useState([])


  function toggleTodo(id, completed) {
    settodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteItem(id) {
    settodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  function addTodo(title) {
    settodos(prevTodos => {
      return [...prevTodos, { id: crypto.randomUUID(), title, completed: false }]
    })
  }

  return (
    <>
      < NewFormItem passFn = {addTodo} />
        <ul className="item-list">
          {todos.length === 0 && "No items found"}
          {todos.map( todo => {
            return (
              <li key={todo.id}>
                <label>
                  <input type="checkbox" checked={todo.completed} 
                  onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                  {todo.title}
                </label>
                <button className="btn btn-danger" 
                onClick={() => deleteItem(todo.id)}                
                >Remove
                </button>
              </li>
            )
          })}
        </ul>
    </>
  )
}

export default App
