import { $BaseEntity } from "@common/bean/$BaseEntity";
import { Sex } from "@common/enum/Sex";
import { bean } from "lich-king2/lib";
import { observable } from "mobx";

@bean($People)
export class $People extends $BaseEntity {
	@observable
	public name: string;
	@observable
	public age: number;
	@observable
	public sex: Sex;
}