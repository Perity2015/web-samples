import React from "react";

const QRCode = require('qrcode.react');

export interface ICEQRCodeProps {
	value: string;
	renderAs?: 'canvas' | 'svg';
	size?: number;
	bgColor?: string;
	fgColor?: string;
	level?: 'L' | 'M' | 'Q' | 'H';
}

class ICEQRCode extends React.Component<ICEQRCodeProps, any> {

	public static defaultProps = {
		renderAs: 'canvas',
		size: 128,
		level: 'L',
		bgColor: '#FFFFFF',
		fgColor: '#000000'
	};

	public render() {
		return (
			<QRCode {...this.props}/>
		);
	}
}

export default ICEQRCode;
