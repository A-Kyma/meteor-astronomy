async function link(config) {
	const Class = this.constructor;
	const collection = Class.getFilesConfig();
	// Use async method for Meteor v3 compatibility
	const doc = Meteor.isServer 
		? await collection.findOneAsync(this._id)
		: collection.findOne(this._id);

	return doc.link(config)
};

export default link;