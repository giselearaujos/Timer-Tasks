import { ITask } from '../../../types/task';
import style from './Item.module.scss';

interface Props extends ITask {
  selectTask: (handleTask: ITask) => void;
}

export default function Item(
  {
    id,
    task,
    timer,
    selected,
    completed,
    selectTask,
  }: Props) {  
  return(
    <li 
      className={
        `${style.item}
         ${selected ? style.itemSelected : ''}
         ${completed ? style.itemCompleted : ''}`
      }
      onClick={() => !completed && selectTask({
        id,
        task,
        timer,
        selected,
        completed,
    })}>
      <h3>{task}</h3>
      <span>{timer}</span>
      {completed && <span className={style.completed}></span>}
    </li>
  )
};