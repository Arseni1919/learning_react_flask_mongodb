import StrategiesListItem from "./StrategiesListItem";


const strategies_list = ['strat 1', 'strat 2', 'strat 3']


const StrategiesList = ({containerClasses}) => {
    return (
        <div className={'container my-2 p-2 overflow-auto'}>
            <h4>Strategies List</h4>
            {strategies_list.map((stat_item) => (
                <StrategiesListItem key={stat_item} strategyName={stat_item} />
            ))}
        </div>
    )
}

export default StrategiesList