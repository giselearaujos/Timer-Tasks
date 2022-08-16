import React from 'react';

import style from './App.module.scss';
import Form from '../components/Form';
import List from '../components/List';
import Chronometer from '../components/ Chronometer';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List/>
      <Chronometer />
    </div>
  );
}

export default App;
