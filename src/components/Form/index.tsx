import React, { useState } from 'react';

import style from './Form.module.scss';
import Button from '../Button';
import { ITask } from '../../types/task';
import { v4 as uuidv4 } from 'uuid';

function Form({setTasks}: {setTasks : React.Dispatch<React.SetStateAction<ITask[]>>}) {
  const [task, setTask] = useState('');
  const [timer, setTimer] = useState('00:00');

  const addNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks(
      oldTasks => [
        ...oldTasks,
         {
          id: uuidv4(),
          task,
          timer,
          selected: false,
          completed: false
        }
      ]
    );        
  } 

  return(
    <form className={style.newTask} onSubmit={addNewTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">TASKS</label>
        <input
         type="text"
         name="task"
         value={task}
         onChange={event => setTask(event.target.value)}
         id="task"
         placeholder="Enter your task"
         required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="timer">TIMER</label>
        <input
         type="timer"
         step="1"
         name="timer"
         value={timer}
         onChange={event => setTimer(event.target.value)}
         id="timer"
         min="00:00:00"
         max="01:30:00"         
         required
        />
      </div>
      <Button type="submit">
        Add
      </Button>
    </form>
  );
}

export default Form;