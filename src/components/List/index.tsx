import React from 'react';

import style from './List.module.scss';

function List() {
  const tasksMock = [
    {
      task: 'Javascript',
      time: '01:30:00',
    },
    {
      task: 'ReactJS',
      time: '01:40:00',
    },
    {
      task: 'SASS',
      time: '01:10:00',
    },
    {
      task: 'HTML',
      time: '01:00:00',
    },
  ]
  return(
    <aside className={style.listTask}>
      <h2>Tasks of the day</h2>
      <ul>
        {tasksMock.map((item, index) => (
          <li key={index} className={style.item}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>

    </aside>
  );
}

export default List;