/**
 * 跳转链接
 * @param context
 * @param {string} pathname
 * @param {{}} query
 * @param replace
 * @param refresh
 */
export const goToPath = (context: any, pathname: string, query = {}, replace?: boolean, refresh?: boolean) => {
	// const newQuery = { ...context.location.query, ...query };
	const keys = Object.keys(query);
	let search = ``;
	keys.forEach((key, index) => search += `${key}=${query[key]}${index === keys.length - 1 ? "" : "&"}`);
	if (refresh) {
		if (replace) {
			window.location.replace(`${pathname}?${search}`);
		} else {
			window.location.href = `${pathname}?${search}`;
		}
	} else {
		if (replace) {
			context.history.replace({ pathname, search });
		} else {
			context.history.push({ pathname, search });
		}
	}
};
