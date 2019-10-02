import PropTypes from "prop-types";

const StudentShape = PropTypes.shape({
  completion: PropTypes.number.isRequired,
  successRate: PropTypes.number.isRequired,
  avatar: PropTypes.object.isRequired,
  isOnline: PropTypes.bool.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
});

export default StudentShape;