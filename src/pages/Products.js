import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../context/app-context'
import { CART_ACTION, ProductItem } from '../context/cart-reducer'

/**
 * Product listing page
 *
 * @param {*} props
 * @returns ProductsPage component
 */
const ProductsPage = (props: any) => {
	const context = useContext(AppContext)
	const { cartDispatcher } = context

	/**
	 * Cart dispatcher for adding a product to the shopping cart
	 *
	 * @param {ProductItem} product
	 */
	const addProductToCart = (product: ProductItem) => {
		cartDispatcher({ type: CART_ACTION.ADD_PRODUCT_TO_CART, payload: product })
	}

	return (
		<React.Fragment>
			<div>
				<Link to="cart">Cart</Link>
			</div>
			<div>Products</div>
			<ul>
				{context.products.map((product) => (
					<li key={product.id}>
						<div>
							<strong>{product.title}</strong> - ${product.price}
						</div>
						<div>
							<button onClick={() => addProductToCart(product)}>
								Add to Cart
							</button>
						</div>
					</li>
				))}
			</ul>
		</React.Fragment>
	)
}

export default ProductsPage
