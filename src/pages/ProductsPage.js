import React, { useContext } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

//import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Product from '../components/Product'

import AppContext from '../context/app-context'
//import { CART_ACTION, ProductItem } from '../context/cart-reducer'

/**
 * Product listing page
 *
 * @param {*} props
 * @returns ProductsPage
 */
const ProductsPage = (props: any) => {
	const context = useContext(AppContext)

	// Make the JSS styles
	const classes = makeStyles((theme: Theme) =>
		createStyles({
			productCard: {
				minWidth: 275,
			},
			productItems: {},
		})
	)()

	return (
		<React.Fragment>
			<Header title="Products" />
			<Container maxWidth="sm" className={classes.productItems}>
				{context.products.map((product) => (
					<Product key={product.id} item={product} />
				))}
			</Container>
		</React.Fragment>
	)
}

export default ProductsPage
