import "./Updatetask.css"
import React, { useState } from 'react'
import axios from "axios"

function Updatetask(props) {
    const [task, setTask] = useState(props.task.todo)
    const updateTask = () => {
        if (task.trim() === "" || props.task.todo === task) {
            props.removePopup()
        } else {
            axios.put(`http://localhost:3001/api/tasks/${props.task._id}`, {
                _id: props.task._id,
                todo: task,
                isComplete: props.task.isComplete
            }).then(res => {
                props.removePopup()
                props.Updatetask(res.data)
            }).catch(err => console.log(err))
        }
    }
    return (
        <div className="popup">
            <div className="popup-content">
                <input type="text" placeholder="Update task.." value={task} onChange={e => setTask(e.target.value)}></input>
                <button onClick={() => updateTask()}>Update</button>
            </div>
        </div>
    )
}

export default Updatetask

