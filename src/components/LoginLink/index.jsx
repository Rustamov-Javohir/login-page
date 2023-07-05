import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./link.css";

const LoginLink = ({ to, className, children }) => {
    return (
        <NavLink to={to} className={className}>
            {children}
        </NavLink>
    );
};

LoginLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

LoginLink.defaultProps = {
    className: "",
};

export default LoginLink;
