import { $Theme } from "@common/bean/$Theme";
import { SexMap } from "@common/enum/Sex";
import { $PeopleMV } from "@common/mv/$PeopleMV";
import BasicLayout from "@components/layout/BasicLayout";
import { autowired } from "lich-king2/lib";
import { observer } from "mobx-react";
import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

@observer
class Index extends React.Component<any, any> {

	@autowired($Theme)
	public $theme: $Theme;

	@autowired($PeopleMV)
	public $peopleMV: $PeopleMV;

	constructor(props) {
		super(props);
		this.state = {};
	}

	public componentDidMount() {
		this.$peopleMV.getInfo();
	}

	public render() {
		const { $people } = this.$peopleMV;
		return (
			<BasicLayout>
				{!!$people && <SPeopleDiv>
            <div>姓名:{$people.name}</div>
            <div>年龄:{$people.age}</div>
            <div>性别:{SexMap[$people.sex]}</div>
        </SPeopleDiv>}
			</BasicLayout>
		);
	}
}

export default withRouter(Index);

const SPeopleDiv = styled.div`// styled
  & {
    position: relative;
    padding: 0.3rem;
    line-height: 2;
  }
`;
