async function upload(config) {
	// Use async method for Meteor v3 compatibility
	const filesConfig = this.getFilesConfig();
	if (Meteor.isServer && filesConfig.insertAsync) {
		return await filesConfig.insertAsync(config);
	}
	return filesConfig.insert(config);
};

export default upload;