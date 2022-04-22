
const SignalsListItem = ({signalName}) => {
    const toBuy = Math.random() > 0.5
    // console.log(toBuy)
    return (
        // <div>
        //     {signalName}
        // </div>
        <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                {signalName}

        </li>
    )
}

export default SignalsListItem