import { ResponseCode } from 'core/http/const';
import { isEmpty } from 'lodash';

export const responseHelper = (res, toastSuccess?) => {
	const { code, msg, data } = res;
	if (code === ResponseCode.SUCCESS) {
		return Promise.resolve(data);
	} else if (code === ResponseCode.FAIL) {
		if (!isEmpty(msg)) {
		}
		return Promise.reject(res);
	} else {
		if (!isEmpty(msg)) {
		}
		return Promise.reject(res);
	}
};

