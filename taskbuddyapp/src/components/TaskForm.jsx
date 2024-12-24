import React, { useState } from 'react'
import "./style.css";

export default function TaskForm({addTask}) {
    const[task,setTask] = useState('');
    const[priority,setPriority] = useState('Medium');
    const[category,setCategory] = useState('General');
    
    const handleSubmit = (e) => {               // send data to addTask method
      e.preventDefault();
      addTask({text: task, priority, category, completed: false});

      //Reset state
      setPriority("Medium");
      setCategory("General");
      setTask('');
    }
  return (
        <form onSubmit={handleSubmit} className='task-form'>
          <div id='inp'>
        <input type="text" 
        placeholder='Enter your task'
        required
        value={task}
        onChange = {(e)=> setTask(e.target.value)}/>
        <span><button>Add Tasks</button></span>
        </div>

        <div className='btns'>
          <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
            <option value="">Medium</option>
            <option value="">Low</option>
            <option value="">High</option>
          </select>

          <select value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option value="">General</option>
          <option value="">Work</option>
          <option value="">Personal</option>
          </select>
        </div>
        </form>
  )
}
