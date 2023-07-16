import React,{useState} from 'react'
import { IGoal } from '../../shared/interfaces/goal.interface';
import "./GoalStats.css";
import Interval from '../Interval/Interval';
import config from '../../config';

type Props = {
    goalId: number,
    goals: IGoal[],
    setGoals: (goals:  IGoal[]) => void
}

export default function GoalStats({ goalId, goals, setGoals, setShowStats } : Props) {


    
  const saveValue = async(value: number) => {
    const goal = goals.find(x => x.id === goalId)!

    const { id } = goal;
    await fetch(`${config.BACKEND_URL}/goals/${id}`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({current_value: value})
    })

    const res = await fetch(`${config.BACKEND_URL}/goals/${id}`)
    const updatedGoal = await res.json();

    console.log({updatedGoal});
    

    const newGoals:IGoal[] = [...goals];

    for (let index = 0; index < newGoals.length; index++) {
      if(newGoals[index].id === id)  newGoals[index] = updatedGoal.data
    }

    setGoals(newGoals);
    setShowStats(false)
    
    
  }
  const goal = goals.find(x => x.id === goalId)!



  const intervalsElements = goal.intervals.map(i => <Interval key={i.order} interval={i} repeat={goal.repeat} saveValue={saveValue}/>);


  return (
    <div className='goal-stats' onClick={(event) => event.preventDefault()}>
        <div className="goal-stats__description">{goal.description}</div>
        <div className="goal-stats__target-date">{goal.target_date}</div>
        <div className="goal-stats__repeat">{goal.repeat}</div>
        <div className="goal-stats__status">{goal.status}</div>
        <div className='goal-stats__intervals'>
            {intervalsElements}
        </div>
    </div>
  )
}
