
import React, {useState, useEffect} from 'react';




const Task = () => {

    
const [task, setTask] = useState('');
const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Сохранение задач в localStorage при изменении списка задач
  useEffect(() => {
   if (tasks.length > 0 || - 1) {
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
  
  const handleDelTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }


  return (
    <div>
       <h1>Hello,To-Do List</h1>
    <input type="text" 
    value={task}
    onChange={handleInputChange}

    />
    <button onClick={handleAddTask}>OK</button>

    <ul className="items">
 {tasks.map((task,index) => (
 
    <li className="item" key={index}> 
    
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
