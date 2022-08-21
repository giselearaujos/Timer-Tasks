import style from './Chronometer.module.scss';

import Button from "../Button";
import Clock from "./Clock";
import { changeTimerToSeconds } from '../../common/utils/timer';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';

interface Props {
  selected: ITask | undefined;
}

export default function Chronometer({ selected }: Props) {  
  const [decreTime, setDecreTime] = useState<number>();

  useEffect(() => {
    if(selected?.timer) {
      setDecreTime(changeTimerToSeconds(selected.timer))
    }
  },[selected])


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