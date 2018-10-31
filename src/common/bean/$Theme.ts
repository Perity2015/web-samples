import { bean } from "lich-king2/lib";
import { observable } from "mobx";

@bean($Theme)
export class $Theme {

	@observable
	public theme: {
		themeColor: string;
		secondaryColor: string;
	} = {
		themeColor: '#446429',
		secondaryColor: 'rgba(68,100,41,0.3)'
	};

}