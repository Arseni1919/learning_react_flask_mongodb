import { FaTimes } from "react-icons/fa";

const Task = ({task_id, task, onDelete, onToggle}) => {
    return (
        <div className={`task container rounded-3 border border-4 my-3 ${task.reminder ? "border-warning": 'border-info'}`} onDoubleClick={() => onToggle(task.id)}>
            <div className="row">
                <div className="col-10">
                    <h3>{task.text} </h3>
                    <p>{task.day}</p>
                </div>
                <div className="col-2 align-self-center">
                    <FaTimes
                        size={50}
                        style={{color: 'red', cursor: 'pointer'}}
                        onClick={() => onDelete(task.id)}
                    />
                </div>
            </div>


        </div>
    )
}

export default Task