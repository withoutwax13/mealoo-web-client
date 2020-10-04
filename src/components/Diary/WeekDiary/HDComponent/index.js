import React, { useState } from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./style";
import DiaryItem from "../../DiaryItem/index";

const MobileComponent = (props) => {
  const { data } = props;

  return (
    <Wrapper>
      {data.map((d, i) => (
        <DiaryItem data={d} key={i} />
      ))}
    </Wrapper>
  );
};

MobileComponent.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MobileComponent;
