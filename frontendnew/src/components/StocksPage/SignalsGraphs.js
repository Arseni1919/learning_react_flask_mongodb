
import SignalsGraphItem from "./SIgnalsGraphItem";


const signals_list = ['signal 1', 'signal 2', "signal 3"]


const SignalsGraphs = ({containerClasses}) => {
    return (
        <div className={containerClasses.join(' ')}>
            <h4>Signals Graphs</h4>
            {signals_list.map((sig_item) => (
                    <SignalsGraphItem key={sig_item} signalName={sig_item} />
            ))}
        </div>
    )
}

export default SignalsGraphs