import { useState } from "react"

export function NewFormItem({passFn}) { 

  const [newItem, setnewItem] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newItem === "") return
    passFn(newItem)
    setnewItem("")
  }

  return (
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
  </form>
  )
}