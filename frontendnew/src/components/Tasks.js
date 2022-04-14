import {useState} from "react";
import Task from "./Task";

const Tasks = ({tasks}) => {


    return (
        <span>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </span>
    )
}


export default Tasks