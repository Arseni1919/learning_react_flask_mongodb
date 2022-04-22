import SignalsListItem from "./SignalsListItem";


const signals_list = ['signal 1', 'signal 2', "signal 3"]


const SignalsList = ({containerClasses}) => {
    return (
        <div className={'container my-2 p-2 overflow-auto'}>
            <h4>Signals List</h4>
            <ul className="list-group">
                {signals_list.map((sig_item) => (
                    <SignalsListItem key={sig_item} signalName={sig_item} />
            ))}
            </ul>
        </div>
    )
}

export default SignalsList