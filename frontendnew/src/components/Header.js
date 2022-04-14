import PropTypes from "prop-types"
import Button from "./Button";

const onClickDefault = (e) => {
  console.log('From Header')
}

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
        <div className="row">
            <h1 className='col-8'>{title}</h1>
            <div className="text-end col-4">
                <Button color='btn-dark' text='Click Here!' onClick={onClickDefault} />
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