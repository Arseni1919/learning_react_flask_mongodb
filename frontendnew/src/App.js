import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useEffect, useState} from "react"; // useEffect - when we want something when the data loads or some side effects
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    // const d = new Date();
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])

    const fetchTasks = async () => {
        return await fetch('http://localhost:5000/tasks').then(
            res => res.json()
        )
    }

    const fetchTask = async (id) => {
            return await fetch(`http://localhost:5000/tasks/${id}`).then(
                res => res.json()
            )
    }
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const addTask = async (task) => {
        // const next_id = Math.max(...tasks.map(task => task.id)) + 1
        // const newTask = {id: next_id, ...task}
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        // const next_id = Math.floor(Math.random() * 10000) + 1
        const resTask = await res.json()
        setTasks([resTask, ...tasks])
    }
    
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
        const res = await fetch(`http://localhost:5000/tasks/${id}`,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json()

        setTasks(tasks.map((task) => task.id === id ? {
              ...task, reminder: data.reminder
          } : task))
    }

    const classes = ['container', 'rounded-3', 'border border-success', 'mt-3', 'p-5']
    return (

            <div className={classes.join(" ")}>
                {/*<Example />*/}
                <Header title='React + Flask + MongoDB'
                        onAdd={() => setShowAddTask(!showAddTask)}
                        showAddTask={showAddTask}
                />

                {showAddTask && <AddTask onAdd={addTask}/>}
                {tasks.length > 0 ?
                    <Tasks
                        tasks={tasks}
                        onDelete={deleteTask}
                        onToggle={toggleReminder}
                    />
                    : 'No tasks'
                }


                <Footer />
            </div>

    );
}

export default App;
