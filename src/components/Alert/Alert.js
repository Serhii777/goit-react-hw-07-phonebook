import React from "react";
import PropTypes from "prop-types";

import stylesAlert from "./Alert.module.css";

const Alert = ({ newContactUnique, timeout }) => {
  setTimeout(timeout, 2500);

  return (
    <div className={stylesAlert.alertWrapper}>
      <p className={stylesAlert.alertText}>
        This {newContactUnique} is already exist!
      </p>
    </div>
  );
};

Alert.propTypes = {
  newContactUnique: (PropTypes.string, PropTypes.bool ),
  // newContactUnique: (PropTypes.bool, PropTypes.string ),
  // newContactUnique: (PropTypes.bool),
};

Alert.defaultProps = {
  newContactUnique: false,
};

export default Alert;