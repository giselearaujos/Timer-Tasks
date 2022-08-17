import React, { useState } from 'react';

import style from './App.module.scss';
import Form from '../components/Form';
import List from '../components/List';
import Chronometer from '../components/ Chronometer';
import { ITask } from '../types/task';

function App() {
  const [ tasks, setTasks ] = useState<ITask[]>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Chronometer />
    </div>
  );
}

export default App;
