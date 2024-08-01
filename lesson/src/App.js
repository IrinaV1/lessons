import React, {useState} from 'react';
import './App.css';


function App() {

const [task, setTask] = useState('');


const handleInputChange = (event) => {
  setTask(event.target.value);
}

const handleAddTask = () => {
  setTask('')
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
    <li className="item"> hvkjgbkj
      <div>
      <button>DONE</button>
      <button>DELETE</button>
      </div>
    </li>
  </ul>
 
    </div>
  );
}

export default App;
