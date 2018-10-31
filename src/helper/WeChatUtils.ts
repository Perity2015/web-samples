const wx = require('weixin-js-sdk');
/**
 * 图片预览
 * @param urls
 * @param index
 */
export const previewImages = (urls = [], index = 0) => {
	if (urls.length === 0) {
		return;
	}
	if (!urls[index]) {
		return;
	}
	wx.previewImage({
		current: urls[index], // 当前显示图片的http链接
		urls // 需要预览的图片http链接列表
	});
};
