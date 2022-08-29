import React, { useState} from 'react'
import { useTodoLayerValue } from './context/Todocontext';
import Todolist from './components/Todolist';
import './App.css';

const App = () => {
  const [{ todos } , dispatch]= useTodoLayerValue();
  const [content, setContent] = useState('');
  
  const handleSubmit = (event) => {
        event.preventDefault();

        if(!content && content.length<1 ) return;

        const newTodo = {
          id: Math.floor(Math.random() * 428374324),
          content,
          isCompleted: false
        };

        dispatch({
          type: 'ADD_TODO',
          payload: newTodo,
        });
  };

  return (
  <div className='container'>
    <form onSubmit={handleSubmit} className='todo-form'>
      <input type="text" className="todo-input" onChange={(event) => setContent(event.target.value)} value={content} />
      <button className='todo-button'>
        ekle
      </button>
    </form>
     
    <Todolist todos={todos} />
  </div>

  );
};

export default App;
