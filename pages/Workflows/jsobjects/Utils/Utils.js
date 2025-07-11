export default {
	isCurrentPage(page) {
		console.log("current page", appsmith.store.page)
		if (appsmith.store.page === page) return true;
		return false;
	},
	setCurrentPage(page) {
		storeValue('page', page);
		navigateTo(page)
	},
}