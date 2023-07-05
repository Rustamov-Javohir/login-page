import PropTypes from "prop-types";
import "./input.css";

const Input = ({ className, type, name, placeholder }) => {
    return (
        <input
            className={className}
            type={type}
            name={name}
            placeholder={placeholder}
        />
    );
};

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
    type: "text",
    className: "",
    placeholder: "",
};

export default Input;
