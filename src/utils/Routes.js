import React from "react";
import PropTypes from "prop-types";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import History from "./History";

import Landing from "../pages/Landing/index";
import Meal from "../pages/Meal/index";
import PersonalizedMeals from "../pages/PersonalizedMeals/index";
import Profile from "../pages/Profile/index";
import About from "../pages/About/index";
import Contact from "../pages/Contact/index";
import Help from "../pages/Help/index";
import Login from "../pages/Login/index";
import Signup from "../pages/Signup/index";

import Integrated from "../components/Integrated/index";

// for the mean time the / path directs to Landing page. It will be changed in the future to cater
// users based on their authorization

const Routes = ({ logData }) => {
  return (
    <div>
      <Router history={History}>
        <Integrated>
          <Switch>
            <Route exact path="/" component={logData ? Login : Landing} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/set" component={PersonalizedMeals} />
            <Route exact path="/user" component={Profile} />
            <Route exact path="/meal" component={Meal} />
            <Route exact path="/about" component={About} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route component={Landing} />
          </Switch>
        </Integrated>
      </Router>
    </div>
  );
};

const mapStateToProps = ({ clientLogDetails }) => {
  return {
    logData: clientLogDetails,
  };
};

Routes.propTypes = {
  logData: PropTypes.any,
};

export default connect(mapStateToProps)(Routes);
