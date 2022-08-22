import style from './Chronometer.module.scss';

import Button from "../Button";
import Clock from "./Clock";
import { changeTimerToSeconds } from '../../common/utils/timer';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

export default function Chronometer({ selected, finishTask }: Props) {  
  const [decreTime, setDecreTime] = useState<number>();

  useEffect(() => {
    if(selected?.timer) {
      setDecreTime(changeTimerToSeconds(selected.timer))
    }
  },[selected])

  function regressive(counter: number = 0){
    setTimeout(() => {
      if(counter > 0) {
        setDecreTime(counter - 1)
        return regressive(counter - 1)
      }
      finishTask();
    },1000)
  }

  return(
    <div className={style.chronometer}>
      <p className={style.title}>Choose the task and start the timer</p>      
      <div className={style.clockWrapper}>
        <Clock decreTime={decreTime} />
      </div>
      <Button onClick={() => regressive(decreTime)}>Start</Button>
    </div>
  )
}