import { bean, beanMapper } from "lich-king2/lib";

@bean($BaseEntity)
export class $BaseEntity {

	constructor(entity: any) {
		beanMapper(entity, this);
	}
}
