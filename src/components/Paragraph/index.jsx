import PropTypes from "prop-types";
import "./paragraph.css";

const Paragraph = ({ className, children }) => {
    return <p className={className}>{children}</p>;
};

Paragraph.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Paragraph.defaultProps = {
    className: "",
};

export default Paragraph;
