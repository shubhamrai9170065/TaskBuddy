import React, { useState } from 'react'
import "./style.css";

export default function TaskForm() {
    const[task,setTask] = useState('');
    const[priority,setPriority] = useState('Medium');
    const[category,setCategory] = useState('General');
  return (
        <form action="" className='task-btn'>
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
