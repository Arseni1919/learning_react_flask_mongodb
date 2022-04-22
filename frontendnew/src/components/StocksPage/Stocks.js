import Header from "../Header";
import {Link} from "react-router-dom";
import StrategiesList from "./StrategiesList";
import SignalsList from "./SignalsList";
import MainGraph from "./MainGraph";
import SignalsGraphs from "./SignalsGraphs";
import StocksList from "./StocksList";
import {useRef, useEffect} from "react";

const Stocks = () => {
    const containerClasses = ['container', 'rounded-3', 'border border-2 border-primary', 'my-2', 'p-2']

    const ref = useRef(null);
    useEffect(() => {
        // console.log("width", ref.current.offsetWidth);
        }, [ref]);

    return (
        <div className='container mt-2 p-1'>

            <Header title={'Stocks Page'} />

            <div className="row">
                <div className="col">
                    <StrategiesList containerClasses={containerClasses} />
                    <SignalsList containerClasses={containerClasses} />
                </div>
                <div className="col-8" ref={ref}>
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