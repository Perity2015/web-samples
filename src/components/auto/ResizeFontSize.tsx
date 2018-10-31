import React from "react";
import { findDOMNode } from "react-dom";

export interface ResizeFontSizeProps {
	defaultLength: number;
	value: string;
	className?: any;
}

class ResizeFontSize extends React.Component<ResizeFontSizeProps, any> {

	private ref;

	constructor(props) {
		super(props);
		this.state = {
			fontSize: ''
		};
	}

	public componentDidMount() {
		const { defaultLength, value } = this.props;
		const ele: any = findDOMNode(this.ref);
		const width = ele.offsetWidth;
		if (value.length > defaultLength) {
			this.setState({ fontSize: Math.round(width / (value.length + 2)) })
		}
	}

	public render() {
		const { value, className } = this.props;
		const { fontSize } = this.state;
		return (
			<div ref={ref => this.ref = ref}
					 className={className}
					 style={{ fontSize }}
			>{value}</div>
		);
	}
}

export default ResizeFontSize;
