export default {
	isCurrentPage(page) {
		console.log("@@@@", page)
		if (appsmith.store.page === page) return true;
		return false;
	},
	setCurrentPage(page) {
		storeValue('page', page);
		navigateTo(page)
	}
}