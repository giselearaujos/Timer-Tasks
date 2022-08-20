import { ITask } from '../../../types/task';
import style from '../List.module.scss';

export default function Item({id, task, timer, selected, completed}: ITask) {  
  console.log({id, task, timer, selected, completed});
  return(
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{timer}</span>
    </li>
  )
};