import { useState } from 'react'
import './App.css'

function App() {
  const [newItem, setnewItem] = useState("")
  const [todos, settodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newItem === "") return
    settodos(prevTodos => {
      return [...prevTodos, { id: crypto.randomUUID(), title: newItem, completed: false }]
    })
    setnewItem("")
  }

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

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item"
            value={newItem}
            onChange={e => setnewItem(e.target.value)}
          />
          <button type="submit" className="btn btn-primary"
          onClick={handleSubmit}
          >Add</button>
        </div>
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
        </form>
    </>
  )
}

export default App
