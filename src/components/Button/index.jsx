import PropTypes from "prop-types";
import "./button.css";

const Button = ({ className, children, ...rest }) => {
    return (
        <button className={className} {...rest}>
            {children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    className: "",
};

export default Button;
