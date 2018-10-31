import { $People } from "@common/bean/$People";
import { $PeopleService } from "@common/services/$PeopleService";
import { responseHelper } from "@core/http/helper";
import { autowired, bean } from "lich-king2/lib";
import { action, observable } from "mobx";

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