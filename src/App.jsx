import { useState } from 'react'
import './App.css'

function App(){
  const [todoInput,setTodoInput] = useState('')
  const [todoText,setTodoText] = useState('')
  const [isDark,setIsDark] =useState(false)
  const [count,setCount] =useState(0)
  const [isCardHidden,setIsCardHidden] =useState(false)
  const [showCardTitle,setShowCardTitle] = useState(false)

  const handleTodoAdd =()=> {
    setTodoText(todoInput)
    setTodoInput('')
  }

  return (
    <div className={`app-container ${isDark ?'dark' :'light'}`}>
      {}
      <h2>Dawere rac ginda is</h2>
      <input
        className="input"
        type="text"
        placeholder="Write something..."
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleTodoAdd()
          }
        }}
      />
      <button className="btn" onClick={handleTodoAdd}>Add</button>
      <h3 className="todo-text">{todoText}</h3>
      <hr />

      
      <h2>Theme Toggle</h2>
      <button className="btn" onClick={() => setIsDark(!isDark)}>
        Change to {isDark ?'Light' :
        'Dark'} Mode
      </button>
      <hr />
      <h2>Counter</h2>
      <h3 className="count-number">{count}</h3>
      <button className="btn" onClick={()=> setCount(count + 1)}>+</button>
      <button className="btn" onClick={() => setCount(count - 1)}>-</button>

      <hr />
      <h2>Card</h2>
      {!isCardHidden ?(
        <div className="card">
          <h3 className="card-title">My Card</h3>
          <img
            className="card-img"
            alt="card"
          />
          <p className="card-desc">Isanshi ert tviani paketi mas</p>
          <button className="btn" onClick={() => setIsCardHidden(true)}>Hide Card</button>
        </div>
      ) : (
        <div>
          {!showCardTitle ? (
            <button className="btn" onClick={() => setShowCardTitle(true)}>Show Title</button>
          ) : (
            <h3 className="card-title">My Card</h3>
          )}
        </div>
      )}
    </div>
  )
}

export default App
