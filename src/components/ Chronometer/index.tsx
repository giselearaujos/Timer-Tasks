import style from './Chronometer.module.scss';

import Button from "../Button";
import Clock from "./Clock";

export default function Chronometer() {
  return(
    <div className={style.chronometer}>
      <p className={style.title}>Choose the task and start the timer</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Start</Button>
    </div>
  )
}