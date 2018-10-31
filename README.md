#### 项目运行

```
npm install
```

```
npm start
```
#### 功能开发
返回的用户信息用于展示
```
{
  "code": 200,
  "msg": "获取成功",
  "data": {
    "name": "张三",
    "age": 22,
    "sex": 1
  }
}
```
1.定义Service
```
@bean($PeopleService)
export class $PeopleService {

	public getInfo = () => {
		return AjaxUtils.post('/demo', {})
	};

}
```
2.定义Bean
```
@bean($People)
export class $People extends $BaseEntity {
	@observable
	public name: string;
	@observable
	public age: number;
	@observable
	public sex: Sex;
}
```
3.定义MV
```
@bean($PeopleMV)
export class $PeopleMV {

	@autowired($PeopleService)
	public $peopleService: $PeopleService;

	@observable
	public $people: $People;

	@action
	public getInfo = () => {
		this.$peopleService.getInfo()
			.then(responseHelper)
			.then(data => this.$people = new $People(data))
	}
}
```
4.UI组件渲染
```
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
			<SPeopleDiv>
				<div>姓名：{$people && $people.name}</div>
				<div>年龄：{$people && $people.age}</div>
				<div>性别：{$people && SexMap[$people.sex]}</div>
			</SPeopleDiv>
		);
	}
}

export default withRouter(Index);
```
5.样式组件styled-components简单使用
```
const SPeopleDiv = styled.div`// styled
  & {
    position: relative;
    padding: 0.3rem;
    line-height: 2;
  }
`;

```



