import StocksListButton from "./StocksListButton";
import Task from "../Task";

const stocks_names_list = [
    'AAPL',
    'AMZN',
    'DIA',
    'FB',
    'GLD',
    'GOOG',
    'GOOGL',
    'GOVT',
    'IAU',
    'IEF',
    'IGSB',
    'IVV',
    'LQD',
    'MSFT',
    'NFLX',
    'QQQ',
    'SHY',
    'SPY',
    'TLT',
    'TSLA',
    'VCIT',
    'VCSH',
    'VIXY',
    'VOO',
]

const StocksList = ({containerClasses}) => {
    return (
        <div
            className={['container', 'my-2', 'p-2', 'overflow-auto'].join(' ')}
            style={{
                'overflow-y': 'scroll',
                'overflow-x': 'hidden',
            }}
        >
            <h4>Stocks List</h4>
            <StocksListButton stockName={'SPY'}/>
            {stocks_names_list.map((stock_item) => (
                <StocksListButton stockName={stock_item} />
            ))}
        </div>
    )
}

export default StocksList