var productService = require("../servicee/product-service")

class ShippingController{
	constructor() {
		this.REGULAR_PRICE = 0.1
		this.OVERNIGHT_PRICE = 1
	}
		
	getItemShipping(item) {
		var shippingAmount = await productService.getProductWeight(item.id)
		return shippingAmount * this.REGULAR_PRICE
	}
}

module.exports = ShippingController;
