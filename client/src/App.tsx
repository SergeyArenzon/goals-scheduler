import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Goal from './components/Goal/Goal';
import { IGoal } from './shared/interfaces/goal.interface';
import CreateGoal from './components/CreateGoal/CreateGoal';
import config from './config';
import Modal from './UI/Modal';
import GoalStats from './components/GoalStats/GoalStats';







function App() {
  const [goals, setGoals] = useState<IGoal[] | null>(null);
  const [showStats, setShowStats] = useState<boolean>(false);
  const [goalId, setGoalId] = useState<number | null>(null)

  useEffect(() => {
    const fetchGoals = async() => {
      const res = await fetch(`${config.BACKEND_URL}/goals`);
      const goals = await res.json();
      setGoals(goals.data);
    }
  

    fetchGoals();
  
    
    return () => {
      
    }
  }, [])



  

  const goalsElements = goals?.map(goal => {
    return <div key={goal.id} onClick={() => {setShowStats(true); setGoalId(goal.id);}}>
        <Goal  goal={goal}/>
      </div>
  })


  return (
    <>
        {showStats && goalId &&  <Modal setShowModal={setShowStats}>
            <div onClick={ (e) => e.stopPropagation()}>
              <GoalStats goalId={goalId} goals={goals} setGoals={setGoals} setShowStats={setShowStats}/>
              
            </div>
              
          </Modal>}
        <CreateGoal setGoals={setGoals}/>
        <div className='goals-container'>{goalsElements}</div>
    </>
  )
}

export default App
