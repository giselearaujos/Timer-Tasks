import React from 'react';
import Button from '../Button';

function Form() {
  return(
    <form>
      <div>
        <label htmlFor="task">TASKS</label>
        <input
         type="text"
         name="task"
         id="task"
         placeholder="Enter your task"
         required
        />
      </div>
      <div>
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