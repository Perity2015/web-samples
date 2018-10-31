import { Icon, Layout, Menu } from "antd";
import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";

const { Sider, Header, Content, Footer } = Layout;

@observer
class BasicLayout extends React.Component<any, any> {

	constructor(props) {
		super(props);
		this.state = {};
	}

	public render() {
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<FlexSider
					theme={'light'}
					collapsible={false}
					collapsed={true}
				>
					<div className="logo">
						<img src="https://suanhu.oss-cn-hangzhou.aliyuncs.com/mini-weixin-web/assets/imgs/logo.svg" alt=""/>
					</div>
					<Menu theme="light"
								defaultSelectedKeys={['1']}
								mode="inline">
						<Menu.Item key="1">
							<Icon type="pie-chart"/>
							<span>Option 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="desktop"/>
							<span>Option 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="pie-chart"/>
							<span>Option 1</span>
						</Menu.Item>
						<Menu.Item key="4">
							<Icon type="desktop"/>
							<span>Option 2</span>
						</Menu.Item>
						<Menu.Item key="9">
							<Icon type="file"/>
							<span>File</span>
						</Menu.Item>
					</Menu>
				</FlexSider>
				<Layout>
					<FlexHeader/>
					<Layout>
						<Sider width={200} style={{ background: '#fff' }}>
							<Menu theme="light"
										defaultSelectedKeys={['1']}
										mode="inline">
								<Menu.Item key="1">
									<Icon type="pie-chart"/>
									<span>Option 1</span>
								</Menu.Item>
								<Menu.Item key="2">
									<Icon type="desktop"/>
									<span>Option 2</span>
								</Menu.Item>
								<Menu.Item key="3">
									<Icon type="pie-chart"/>
									<span>Option 1</span>
								</Menu.Item>
								<Menu.Item key="4">
									<Icon type="desktop"/>
									<span>Option 2</span>
								</Menu.Item>
								<Menu.Item key="9">
									<Icon type="file"/>
									<span>File</span>
								</Menu.Item>
							</Menu>
						</Sider>
						<Layout style={{ padding: 12 }}>
							<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
								{this.props.children}
							</Content>
						</Layout>
					</Layout>
				</Layout>
			</Layout>
		);
	}
}

export default BasicLayout;

const FlexSider = styled(Sider)`// styled
  & {
    .ant-layout-sider-children {
      display: flex;
      flex-direction: column;
      > div.logo {
        height: 64px;
        border-right: 1px solid #e8e8e8;
        display: flex;
        align-items: center;
        justify-content: center;
        > img {
          width: 48px;
          height: 48px;
        }
      }
      > ul.ant-menu {
        flex: 1;
        padding-bottom: 60px;
        overflow-y: auto;
        .ant-menu-item-selected {
          border-left: 4px solid;
        }
        > li:last-child {
          position: fixed;
          bottom: 0;
        }
      }
    }
  }
`;

const FlexHeader = styled(Header)`// styled
  & {
    position: relative !important;
    display: flex !important;
    background-color: white !important;
    padding: 0 !important;
    border-bottom: 1px solid #e8e8e8;
  }
`;
