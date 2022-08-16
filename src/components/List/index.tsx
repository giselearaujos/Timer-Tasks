import Item from './Item';
import style from './List.module.scss';

function List() {
  const tasksMock = [
    {
      task: 'Javascript',
      timer: '01:30:00',
    },
    {
      task: 'ReactJS',
      timer: '01:40:00',
    },
    {
      task: 'SASS',
      timer: '01:10:00',
    },
    {
      task: 'HTML',
      timer: '01:00:00',
    },
  ]
  return(
    <aside className={style.listTask}>
      <h2>Tasks of the day</h2>
      <ul>
        {tasksMock.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>

    </aside>
  );
}

export default List;