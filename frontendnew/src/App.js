import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";

function App() {
    const d = new Date();
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 't1',
            day: d.toString(),
            reminder: true,
        },
        {
            id: 2,
            text: 't2',
            day: d.toString(),
            reminder: true,
        },
        {
            id: 3,
            text: 't3',
            day: d.toString(),
            reminder: false,
        },
    ])

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }
    
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {
          ...task, reminder: !task.reminder
      } : task))
    }

    const classes = ['container', 'rounded-3', 'border border-success', 'mt-3', 'p-5']
    return (
        <div className={classes.join(" ")}>
            <Header title='React + Flask + MongoDB' />
            {tasks.length > 0 ?
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
                :
                'No tasks'
            }
            {/*<Header />*/}
        </div>
    );
}

export default App;
