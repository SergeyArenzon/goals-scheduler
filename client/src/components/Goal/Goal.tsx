import React from 'react'
import { IGoal } from '../../shared/interfaces/goal.interface';
import "./Goal.css"

interface Props{
    goal: IGoal
}


const colorMapper = {
  inprogress: "gray",
  failed: "red",
  done: "green"
}
 
export default function Goal({ goal } : Props) {
  const style = {
    backgroundColor: colorMapper[goal.status]
  }

  return (
    <div className='goal' style={style}>
        <div className="goal__description">{goal.description}</div>
        <div> {goal.status.toUpperCase()}</div>
    </div>
  )
}
