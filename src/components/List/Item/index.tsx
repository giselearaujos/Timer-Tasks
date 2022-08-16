import style from '../List.module.scss';

export default function Item({task, timer}: {task:string, timer: string}) {  
  return(
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{timer}</span>
    </li>
  )
};