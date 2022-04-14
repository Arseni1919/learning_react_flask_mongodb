import PropTypes from "prop-types";

// const onClickDefault = (e) => {
//   console.log(e)
// }

const Button = ({color, text, onClick}) => {
    const buttonClasses = [color, 'btn']
    return (
      <span>
        <button className={buttonClasses.join(' ')} onClick={onClick}>{text}</button>
      </span>
  )
}

Button.defaultProps = {
    color: 'btn-primary',
    text: 'Click Me',

}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button