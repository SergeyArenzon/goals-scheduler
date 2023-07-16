import {useState, useRef } from 'react'
import './CreateGoal.css'; 
import config from '../../config';
import Modal from '../../UI/Modal';



export default function CreateGoal({setGoals}) {

    const [showModal, setShowModal] = useState<boolean>(false);
    const targetDateRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const intervalRef = useRef<HTMLSelectElement>(null);
    const targetValueRef = useRef<HTMLInputElement>(null)


    const submitHandler = async(event: any) => {
        event.preventDefault();
        const description = descriptionRef.current?.value;
        const targetDate = targetDateRef.current?.value;
        const interval = intervalRef.current?.value;
        const targetValue = targetValueRef.current?.value;
        
        await fetch(`${config.BACKEND_URL}/goals`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                description, 
                target_date: new Date(targetDate).toISOString(), 
                repeat: interval,
                target_value: targetValue
            })
        })

        const res = await fetch(`${config.BACKEND_URL}/goals`);
        const goals = await res.json();
        setGoals(goals.data);
        setShowModal(false)
    }


    return (
    <div>

        <div className='create-goal__btn' onClick={() => setShowModal(true)}>
            New Goal
        </div>

        {
            showModal && <Modal setShowModal={setShowModal}>
                           
                            <form onSubmit={submitHandler}  onClick={(e) => e.stopPropagation()}>
                                <label htmlFor="target-date">  Target Date:</label>
                                <input id="target-date" type="date" ref={targetDateRef}></input>
                                <label htmlFor="description">Description:</label>
                                <input id="description" type="text" ref={descriptionRef}></input>
                
                                <label htmlFor="target-value">Target Value:</label>
                                <input id="target-value" type="number" ref={targetValueRef}></input>
                                
                                <label htmlFor="interval">Intervals:</label>
                                <select id="interval" ref={intervalRef}>
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                </select>
                                <button type="submit">Submit</button>
                            </form>
                        
                </Modal>
        }


    </div>
  )
}
