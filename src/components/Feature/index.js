import React, { Fragment } from "react";
import {
  FeatureContainer,
  FeatureButton,
  FeatureHeading,
  FeatureP,
} from "./FeatureElements";
const Feature = ({ heading, text, buttonText }) => {
  return (
    <Fragment>
      <FeatureContainer>
        <FeatureHeading> {heading} </FeatureHeading>
        <FeatureP> {text} </FeatureP>
        {/* <h1>Pizza of the Day</h1>
        <p>Truffle Alfredo Sauce Topped with 24 carat gold Dust.</p> */}
        <FeatureButton>{buttonText}</FeatureButton>
      </FeatureContainer>
    </Fragment>
  );
};

export default Feature;
