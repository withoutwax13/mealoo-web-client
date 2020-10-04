import React, { useState } from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./style";
import { LeftSlider, RightSlider } from "../Slider/index";
import DiaryItem from "../../DiaryItem/index";

const TabletComponent = (props) => {
  const { data } = props;
  const [initSlideScope, setScope] = useState([0, 1, 2]);

  return (
    <Wrapper>
      <LeftSlider scope={initSlideScope} editScope={setScope} />
      {data.map((d, i) =>
        initSlideScope.indexOf(i) !== -1 ? <DiaryItem data={d} key={i} /> : null
      )}
      <RightSlider scope={initSlideScope} editScope={setScope} />
    </Wrapper>
  );
};

TabletComponent.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TabletComponent;
