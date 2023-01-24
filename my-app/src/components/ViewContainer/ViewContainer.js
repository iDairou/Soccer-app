import React from "react";
import StyledViewContainer from "./ViewContainer.styled";

const ViewContainer = ({ children }) => {
	return <StyledViewContainer>{children}</StyledViewContainer>;
};
export default ViewContainer;
