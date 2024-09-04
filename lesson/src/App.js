import React, {useState} from 'react';
import './App.css';


function App() {

const [task, setTask] = useState('');
const [tasks, setTasks] = useState([]);

const handleInputChange = (event) => {
  setTask(event.target.value);
}

const handleAddTask = () => {
  if (task.trim() !== '') {
    setTasks([...tasks, { text: task, completed: false }]);
    setTask('');
  }
  setTask('')
  
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
    <div className="App">
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
  );
}

export default App;
