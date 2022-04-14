import PropTypes from "prop-types"
import Button from "./Button";
import {Link, useLocation} from "react-router-dom";

// const onClickDefault = (e) => {
//   console.log('From Header')
// }

const Header = ({ title, onAdd, showAddTask }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <div className="row">
                <div className="col-8">

                    <div className="row">
                        <div className="col-2">
                            <Link to="/">Stocks</Link>
                        </div>
                        <div className="col-2">
                            <Link to="/app">App</Link>
                        </div>
                        <div className="col-2">
                            <Link to="/about">About</Link>
                        </div>
                    </div>

                    <div className="row">
                        <h1>{title}</h1>
                    </div>

                </div>
                <div className="text-end col-4 align-bottom">
                    {location.pathname === '/app' &&
                        <Button color={showAddTask ? 'btn btn-danger' : 'btn btn-dark'}
                                text={showAddTask ? 'Close' : 'Add Task'}
                                onClick={onAdd}
                    />}
                </div>
            </div>
        </header>
      )
}

Header.defaultProps = {
    title: 'Default Title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header