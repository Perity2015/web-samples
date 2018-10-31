import React from "react";

export interface ICEIconProps {
	icon: string;
	style?: React.CSSProperties;
	onClick?: any;
}

class ICEIcon extends React.Component<ICEIconProps, any> {

	constructor(props) {
		super(props);
		this.state = {};
	}

	public render() {
		const { icon, style, onClick } = this.props;
		return (
			<i className={`iconfont ${icon}`}
				 onClick={onClick}
				 style={style}/>
		);
	}
}

export default ICEIcon;
