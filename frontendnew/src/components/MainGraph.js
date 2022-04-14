import Plot from 'react-plotly.js';

const MainGraph = ({containerClasses}) => {
    return (
        <div className={containerClasses.join(' ')}>
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
                layout={ {width: 720, title: 'A Fancy Plot'} }
              />
        </div>
    )
}

export default MainGraph