
import React, {useState, useEffect} from 'react';
import '../../App.css';



const Task = () => {

    
const [task, setTask] = useState ('');
const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);


  useEffect(() => {
   if (tasks.length > 0)  {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);


const handleInputChange = (event) => {
    setTask(event.target.value);
  }
  
  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
    
  }
  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };
  

  const inputCheckbox = (index) => {
    
  }
  const handleDelTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

 


  return (
    <div className='wrapper'>
       <h1>Hello,To-Do List</h1>
    <input type="text" 
    value={task}
    onChange={handleInputChange}

    />
    <button className='ok' onClick={handleAddTask}>OK</button>

    <ul className="items">
 {tasks.map((task,index) => (
 
    <li className="item" key={index}> 
    <input  className='inputCheckbox'
    type='checkbox'
    checked={task.completed}
   onChange={() => handleCompleteTask(index)}/>
    <span className='item-task'>{task.text}</span>
      <div>
      <button onClick={() => handleCompleteTask(index)}> {task.completed ? 'UNDO' : 'DONE'}</button>
      <button onClick={() => handleDelTask(index)}>DELETE</button>
      </div>
    </li>
  
 ))} 
 </ul>
    </div>
  )
}

export default Task
