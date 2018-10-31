import React from "react";
import styled from "styled-components";

const ICEPageLoad = ({ error, pastDelay }) => {
	if (error) {
		return <CenterSpin>
			代码更新，请刷新。谢谢！
		</CenterSpin>;
	} else if (pastDelay) {
		return null;
	} else {
		return null;
	}
};

export default ICEPageLoad;

const CenterSpin = styled.div`// styled
  & {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
