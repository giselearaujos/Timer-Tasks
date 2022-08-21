import React, { useState } from 'react';

import style from './App.module.scss';
import Form from '../components/Form';
import List from '../components/List';
import Chronometer from '../components/ Chronometer';
import { ITask } from '../types/task';

function App() {
  const [ tasks, setTasks ] = useState<ITask[]>([]);
  const [ selected, setSelected ] = useState<ITask>();

  function selectTask(handleTask: ITask) {
    setSelected(handleTask)
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: task.id === handleTask.id ? true : false
    })));
  };

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
       tasks={tasks}
       selectTask={selectTask}
      />
      <Chronometer selected={selected}/>
    </div>
  );
}

export default App;
