import Plot from 'react-plotly.js';
// import * as d3 from "d3";
// d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv', function(err, rows){
//
// function unpack(rows, key) {
//   return rows.map(function(row) {
//     return row[key];
//   });
// }
//
// var trace = {
//   x: unpack(rows, 'Date'),
//   close: unpack(rows, 'AAPL.Close'),
//   high: unpack(rows, 'AAPL.High'),
//   low: unpack(rows, 'AAPL.Low'),
//   open: unpack(rows, 'AAPL.Open'),
//
//   // cutomise colors
//   increasing: {line: {color: 'black'}},
//   decreasing: {line: {color: 'red'}},
//
//   type: 'candlestick',
//   xaxis: 'x',
//   yaxis: 'y'
// };
//
// var data = [trace];
//
// var layout = {
//   dragmode: 'zoom',
//   showlegend: false,
//   xaxis: {
//     autorange: true,
//     title: 'Date',
// 	 rangeselector: {
//         x: 0,
//         y: 1.2,
//         xanchor: 'left',
//         font: {size:8},
//         buttons: [{
//             step: 'month',
//             stepmode: 'backward',
//             count: 1,
//             label: '1 month'
//         }, {
//             step: 'month',
//             stepmode: 'backward',
//             count: 6,
//             label: '6 months'
//         }, {
//             step: 'all',
//             label: 'All dates'
//         }]
//       }
//   },
//   yaxis: {
//     autorange: true,
//   }
// };
// Plotly.newPlot('mainGraph', data, layout);



const MainGraph = ({containerClasses}) => {

    return (
        <div className={containerClasses.join(' ')} id='mainGraph'>
            <h4>Main Graph</h4>
            <Plot
                data={[
                  {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                  },
                  {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {
                    // width: 300,
                    display: "inline-block",
                    title: 'A Fancy Plot'} }
              />
        </div>
    )
}

export default MainGraph