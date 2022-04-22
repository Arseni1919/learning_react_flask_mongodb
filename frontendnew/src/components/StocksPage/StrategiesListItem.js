

const StrategiesListItem = ({strategyName}) => {
    const toBuy = Math.random() > 0.5
    // console.log(toBuy)
    return (
        <div>
            <h6>{strategyName} {toBuy ?
                <span className="badge bg-success">Buy</span>:
                <span className="badge bg-warning text-dark">Sell</span>
            }</h6>
        </div>
    )
}

export default StrategiesListItem