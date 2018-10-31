import { observer } from "mobx-react";
import React from 'react';
import { withRouter } from 'react-router';

@observer
class App extends React.Component<any, any> {

	constructor(props) {
		super(props);
		this.state = {};
	}

	public componentDidMount() {

	}

	public render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default withRouter(App);
