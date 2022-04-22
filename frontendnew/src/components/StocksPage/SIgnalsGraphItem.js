import Plot from 'react-plotly.js'

const state = {
   line1: {
      x: [-3, -2, -1],
      y: [1, 2, 3],
      name: 'Line 1'
   },
   line2: {
      x: [1, 2, 3],
      y: [-3, -2, -1],
      name: 'Line 2'
   }
}
const SignalsGraphItem = ({signalName}) => {
    return (
        <div className="p-2 m-2" id='graph'>
            <Plot
                   data={[
                      state.line1,
                      state.line2,
                   ]}
                   graphDiv="graph"
                   style={{
                       // height: 10,
                   }}
                />
                {signalName}

        </div>
    )
}

export default SignalsGraphItem