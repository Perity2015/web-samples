import AjaxUtils from "@core/http";
import { bean } from "lich-king2/lib";

@bean($PeopleService)
export class $PeopleService {

	public getInfo = () => {
		return AjaxUtils.post('/demo', {})
	};

}