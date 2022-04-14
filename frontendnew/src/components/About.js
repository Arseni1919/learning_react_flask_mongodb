import { Link } from 'react-router-dom'
import Header from "./Header";

const About = () => {
    return (
        <div className={['container', 'rounded-3', 'border border-success', 'mt-3', 'p-5'].join(' ')}>
            <Header title={'About Page'} />
            <div className="text-center">
                <h4>Version 1.0</h4>
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )

}

export default About