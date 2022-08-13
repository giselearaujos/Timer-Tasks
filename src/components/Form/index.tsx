import React from 'react';

import style from './Form.module.scss';
import Button from '../Button';

function Form() {
  return(
    <form className={style.newTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">TASKS</label>
        <input
         type="text"
         name="task"
         id="task"
         placeholder="Enter your task"
         required
        />
      </div>
      <div className={style.inputContainer}>
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
      <Button>ADD</Button>
    </form>
  );
}

export default Form;