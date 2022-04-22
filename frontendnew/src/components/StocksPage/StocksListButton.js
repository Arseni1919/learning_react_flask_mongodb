import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
const StocksListButton = ({stockName}) => {
    const [percentageFromPrevClose, setPercentageFromPrevClose] = useState(Math.random() - 0.5)

    return (
        // <div className=' d-flex justify-content-start rounded-3 border border-2 border-success'>
        <div className=' d-flex flex-column my-1'>
            <button type="button" className="btn btn-light text-start">{stockName} &nbsp;
                <span className="badge bg-secondary">
                    {percentageFromPrevClose.toPrecision(2)}%
                    { percentageFromPrevClose > 0 ?
                        <AiFillCaretUp style={{color: 'Aquamarine', cursor: 'pointer'}}/> :
                        <AiFillCaretDown style={{color: 'Crimson', cursor: 'pointer'}}/>}
                </span>
            </button>
            {/*<h6>*/}
            {/*    <button type="button" className="btn btn-light">SPY </button>*/}
            {/*    <span className="badge bg-secondary">{percentageFromPrevClose.toPrecision(2)}%</span>*/}
            {/*</h6>*/}
        </div>
    )
}

export default StocksListButton