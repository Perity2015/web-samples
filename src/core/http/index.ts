import axios from 'axios';

const isProd = process.env.NODE_ENV !== 'development';
const envConst = process.env.ENV_CONST || 'DEV';

let BASE_URL = '';

const ERROR_MSG = {
	code: 500,
	message: '网络故障'
};

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 20000,
	headers: {
		'Content-Type': 'application/json'
	}
});

let timeOut;

axiosInstance.interceptors.request.use(
	(config: any) => {
		return config;
	},
	err => {
		return Promise.reject(err);
	}
);

axiosInstance.interceptors.response.use(
	response => {
		if (timeOut) {
			clearTimeout(timeOut);
		}
		timeOut = setTimeout(() => {
		}, 500);
		return response;
	},
	error => {
		return Promise.reject(error);
	}
);

const AjaxUtils = {
	get: (url: string, params: any) => {
		return new Promise((resolve, reject) => {
			axiosInstance
				.get(`${url}`, { params })
				.then(response => {
					resolve(response.data);
				})
				.catch(err => {
					if (err && err.code === 'ECONNABORTED') {
						reject(err);
						return;
					}
					reject(err);
				});
		});
	},
	post: (url: string, params: any) => {
		return new Promise((resolve, reject) => {
			axiosInstance
				.post(`${url}`, params)
				.then(response => {
					resolve(response.data);
				})
				.catch(err => {
					if (err && err.code === 'ECONNABORTED') {
						reject(err);
						return;
					}
					reject(err);
				});
		});
	}
};

export default AjaxUtils;
