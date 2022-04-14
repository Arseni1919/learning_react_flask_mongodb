import Header from "./Header";
import {Link} from "react-router-dom";
import StrategiesList from "./StrategiesList";
import SignalsList from "./SignalsList";
import MainGraph from "./MainGraph";
import SignalsGraphs from "./SignalsGraphs";
import StocksList from "./StocksList";


const Stocks = () => {
    const containerClasses = ['container', 'rounded-3', 'border border-3 border-primary', 'my-3', 'p-3']
    return (
        <div className='container mt-3 p-5'>

            <Header title={'Stocks Page'} />

            <div className="row">
                <div className="col">
                    <StrategiesList containerClasses={containerClasses} />
                    <SignalsList containerClasses={containerClasses} />
                </div>
                <div className="col-8">
                    <MainGraph containerClasses={containerClasses} />
                    <SignalsGraphs containerClasses={containerClasses} />
                </div>
                <div className="col">
                    <StocksList containerClasses={containerClasses} />
                </div>
            </div>

            {/*<Link to="/">Go Back</Link>*/}

        </div>
    )
}

export default Stocks