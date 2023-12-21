const { default: mongoose } = require("mongoose")

const catalogItemSchema = new mongoose.Schema({
	category: String,
	description: String,
	imgLink: String
});

const catalogItem = mongoose.model('catalogItem', catalogItemSchema);
module.exports = catalogItem
