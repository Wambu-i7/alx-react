import PropTypes from "prop-types";

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired, // Required number
  html: PropTypes.shape({
    __html: PropTypes.string, // Object with a single key "__html" as a string
  }),
  type: PropTypes.string.isRequired, // Required string
  value: PropTypes.string, // Optional string
});

export default NotificationItemShape;

