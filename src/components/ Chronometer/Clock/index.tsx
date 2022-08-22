import style from './Clock.module.scss';

interface Props {
  decreTime: number | undefined;
}

export default function Clock({ decreTime = 0 }:Props) {
  const minutes = Math.floor(decreTime / 60);
  const second = decreTime % 60;
  const [tenMinutes, unityMinutes] = String(minutes).padStart(2,'0');
  const [tenSecond, unitySecond] = String(second).padStart(2, '0');

  return(
    <>
    <span className={style.clockNumber}>{tenMinutes}</span>
    <span className={style.clockNumber}>{unityMinutes}</span>
    <span className={style.clockDiviser}>:</span>
    <span className={style.clockNumber}>{tenSecond}</span>
    <span className={style.clockNumber}>{unitySecond}</span>
    </>
  )
}