import './Interval.css';
import { IInterval } from '../../shared/interfaces/interval.interface';
import { IGoal } from '../../shared/interfaces/goal.interface';
import { useState } from 'react';
import config from '../../config';



type Props = {
    interval: IInterval,
    repeat: "daily" | "weakly" | "monthly",
    saveValue: (n: number) => void
}

const style = {
    inprogress: "gray",
    todo: "yellow",
    failed: "red",
    done: "green"
}

const repeatNames = {
    daily: "day",
     weakly: "week",
     monthly: "month"
}

export default function Interval({ interval, repeat, saveValue } : Props) {
    const [value, setValue] = useState(interval.current_value);


    const changeProgressHandler = (e:any) => {
        if(e.target.value <= interval.target_value && e.target.value  > interval.current_value ) setValue(e.target.value )
        
    }




  return (
    <div className='interval' style={{background: style[interval.status]}}>
        <div><strong>Progress:</strong> {interval.current_value} / {interval.target_value}</div>
        <div><strong>{repeatNames[repeat]} No:</strong> {interval.order}</div>
        <div><strong>Status:</strong> {interval.status}</div>
        {interval.status === "inprogress" && <div>
            <input 
                type="number" 
                value={value}
                min={interval.current_value} 
                max={interval.target_value} 
                onChange={changeProgressHandler}>
            </input>
            <button onClick={() => saveValue(value)}>Save</button>   
        </div>}
    </div>
  )
}
