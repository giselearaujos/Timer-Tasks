import { ITask } from '../../../types/task';
import style from '../List.module.scss';

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
  console.log({id, task, timer, selected, completed});
  return(
    <li 
      className={`${style.item} ${selected ? style.itemSelected : ''}`}
      onClick={() => selectTask({
        id,
        task,
        timer,
        selected,
        completed,
    })}>
      <h3>{task}</h3>
      <span>{timer}</span>
    </li>
  )
};