import { PRODUCT_SPECIAL } from '../context/cart-reducer'

export const makeStaticProducts = () => {
	return [
		{
			id: 'p1',
			title: 'Apple',
			price: 0.6,
			description:
				'An apple a day keeps the doctor away. Buy one, get one free special.',
			special: PRODUCT_SPECIAL.TWO_FOR_ONE,
		},
		{
			id: 'p2',
			title: 'Orange',
			price: 0.25,
			description: 'Fresh Florida oranges. 3 for the price of 2 special',
			special: PRODUCT_SPECIAL.THREE_FOR_TWO,
		},
	]
}

export const makeEmptyCart = () => {
	return {
		items: [],
		totals: {
			subTotal: 0,
			tax: 0,
			discounts: 0,
			total: 0,
		},
		totalItemCount: 0,
	}
}
