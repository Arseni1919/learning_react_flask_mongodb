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
    const classes = ['container', 'rounded-3', 'border border-success', 'mt-3', 'p-5']
  return (
    <div className={classes.join(" ")}>
        <Header title='React + Flask + MongoDB' />
        <Tasks tasks={tasks}/>
        {/*<Header />*/}
    </div>
  );
}

export default App;
