function hasValidPrice(product) {
	return (product !== undefined && product.price !== undefined && 
					typeof product.price === 'number' ?
					(product.price >= 0 ? true : false) : false )
}