import { DiAtom } from "react-icons/di";

const Task = ({task_id, task}) => {
    return (
        <div className='task container rounded-3 border border-4 border-info my-3'>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <DiAtom />

        </div>
    )
}

export default Task