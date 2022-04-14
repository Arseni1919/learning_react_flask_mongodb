import { useState } from "react";


const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()  // prevent actual submitting to the page

        if(!text){
            alert('Please add task!')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form onSubmit={onSubmit}>
            <div className={'form control'}>
                <label className={'form-label'}>Task</label>
                <input className={'form-control'} type="text" placeholder={'Add Task'}
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className={'form control'}>
                <label className={'form-label'}>Day & Time</label>
                <input className={'form-control'} type="text" placeholder={'Add Day & Time'}
                       value={day}
                       onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className={'form-check'}>
                <label className={'form-check-label'}>Set Reminder</label>
                <input className="form-check-input"
                       type="checkbox"
                       checked={reminder}
                       value={reminder}
                       onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <div className="d-grid gap-2">
                <input className="btn btn-dark" type="submit" value={'Save Task'}/>
            </div>
        </form>
    )
}
// <form>
//     <div className="mb-3">
//         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//     </div>
//     <div className="mb-3">
//         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//         <input type="password" className="form-control" id="exampleInputPassword1">
//     </div>
//     <div className="mb-3 form-check">
//         <input type="checkbox" className="form-check-input" id="exampleCheck1">
//             <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//     </div>
//     <button type="submit" className="btn btn-primary">Submit</button>
// </form>
export default AddTask