import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Routes from "../utils/Routes";
import { connect } from "react-redux";

import { checkIfClientHasToken } from "../modules/actions";

const App = ({ checkIfClientHasToken }) => {
  useEffect(() => {
    checkIfClientHasToken();
  }, []);
  return <Routes />;
};

App.propTypes = {
  checkIfClientHasToken: PropTypes.func.isRequired,
};

export default connect(null, { checkIfClientHasToken })(App);
