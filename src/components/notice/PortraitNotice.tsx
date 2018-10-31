import React from "react";
import styled from "styled-components";

class PortraitNotice extends React.Component<any, any> {

	constructor(props) {
		super(props);
		this.state = {};
	}

	public render() {
		return (
			<SMain>
				竖屏使用更好哟！
			</SMain>
		);
	}
}

export default PortraitNotice;

const SMain = styled.div`// styled
  & {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.54rem;
		color: white;
  }
`;
