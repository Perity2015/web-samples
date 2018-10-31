import { getAssetPath } from "@helper/Helper";
import React from "react";
import styled from "styled-components";

// language=LESS
const NotFoundPage = styled.div`// styled
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: 32px;
		>img{
			width: 4.7rem;
		}
  }
`;

const Link = styled.a`// styled
  & {
    font-size: 0.32rem;
    display: inline-block;
    margin: 0.32rem;
		line-height: 2;
		text-decoration: underline;
  }
`;

export const NotFound = () =>
	<NotFoundPage>
		<img src={getAssetPath('404.png')}/>
		<div>
			<Link href="javascript:history.back()">上一页</Link>
			<Link href="/">首页</Link>
		</div>
	</NotFoundPage>;

