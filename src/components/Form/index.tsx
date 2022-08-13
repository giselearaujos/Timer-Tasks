import React from 'react';

import './style.scss';
import Button from '../Button';

function Form() {
  return(
    <form className='newTask'>
      <div className='inputContainer'>
        <label htmlFor="task">TASKS</label>
        <input
         type="text"
         name="task"
         id="task"
         placeholder="Enter your task"
         required
        />
      </div>
      <div className='inputContainer'>
        <label htmlFor="time">TIME</label>
        <input
         type="time"
         step="1"
         name="time"
         id="time"
         min="00:00:00"
         max="01:30:00"         
         required
        />
      </div>
      <Button />
    </form>
  );
}

export default Form;