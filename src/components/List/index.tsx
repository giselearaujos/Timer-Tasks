import { ITask } from '../../types/task';
import Item from './Item';
import style from './List.module.scss';

interface Props {
  tasks: ITask[],
  selectTask: (handleTask: ITask) => void;
}

function List({ tasks, selectTask }: Props) {  
  return(
    <aside className={style.listTask}>
      <h2>Tasks of the day</h2>
      <ul>
        {tasks.map((item) => (
          <Item
            key={item.id}
            selectTask = {selectTask}
            {...item}
          />
        ))}
      </ul>

    </aside>
  );
}

export default List;