import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AuthButton from "../../Button/Auth/index";

import { NavLink, NavigationItemsContainer } from "../styles";

import { clientLogIn, clientLogOut } from "../../../modules/actions";
import History from "../../../utils/History";

const Navigation = (props) => {
  const { isClientHasAuth, clientLogIn, clientLogOut } = props;

  return (
    <NavigationItemsContainer>
      <NavLink to="/help">Help</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact-us">Contact</NavLink>
      <AuthButton
        height={30}
        width={90}
        clickCallback={
          isClientHasAuth
            ? clientLogOut
            : () => {
                History.push("/signup");
              }
        }
        customStyle={`margin-left: 40px;`}
      />
    </NavigationItemsContainer>
  );
};

Navigation.propTypes = {
  isClientHasAuth: PropTypes.bool,
  clientLogIn: PropTypes.func.isRequired,
  clientLogOut: PropTypes.func.isRequired,
};

const mapStateToProps = ({ isClientHasAuth }) => {
  return {
    isClientHasAuth,
  };
};

export default connect(mapStateToProps, { clientLogIn, clientLogOut })(
  Navigation
);
