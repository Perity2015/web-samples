/**
 * 获取图片途径
 * @param {string} pathname
 * @returns {string}
 */
export const getAssetPath = (pathname: string) => {
	return `//wechatcdn.haoduoke.cn/f2e/beautician/assets/images/${pathname}`;
};

/**
 * 设置页面Title
 * @param title
 */
export const setDocumentTitle = (title) => {
	const body = document.body;
	document.title = title; // hack在微信等webview中无法修改document.title的情况
	const $iframe = document.createElement('iframe');
	$iframe.style.display = 'none';
	$iframe.onload = () => {
		setTimeout(() => {
			$iframe.onload = null;
			body.removeChild($iframe);
		}, 0);
	};
	body.appendChild($iframe);
};

/**
 * 拨打电话
 * @param phone
 */
export const callPhone = (phone) => {
	window.open(`tel:${phone}`)
};

/**
 * 模糊手机号
 * @param phone
 */
export const mockPhone = (phone) => {
	if (phone && phone.length > 7) {
		let mock = '';
		for (let i = 0; i < phone.length; i++) {
			if (i >= 3 && i <= 6) {
				mock += '*'
			} else {
				mock += phone[i]
			}
		}
		return mock;
	}
	return phone;
};
