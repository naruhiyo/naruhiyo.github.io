import { Box, Grid, Grommet, Heading } from 'grommet'
import * as React from "react"
import { useTranslation } from "react-i18next"
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Product from './Product'
import Colaborator from './Colaborator'

export default () => {
	const { t } = useTranslation()
	const colaborators: [] = t('colaborators');
	const products: [] = t('products');

	const productList = products.map(v => (<Product product={v}/>));
	const colaboratorList = colaborators.map(v => (<Colaborator profile={v}/>));

	return (
		<Grommet>
			<Header />
			
			<Grid
				fill
				columns={["auto", "flex"]}
				rows={["auto", "flex"]}
				areas={[
					{ name: "colaborator", start: [0, 0], end: [1, 0] },
					{ name: "product", start: [1, 0], end: [2, 0] },
					{ name: "contact", start: [1, 0], end: [2, 0] }
				]}
			>
			</Grid>
			<Box gridArea="colaborator" pad="medium">
				<Heading level="4">Colaborators</Heading>
			</Box>
			<Box gridArea="product" pad="medium">
				<Heading level="4">Products</Heading>
			</Box>
			<Box gridArea="contact" pad="medium">
				<Heading level="4" >Contact Us</Heading>
			</Box>
		<Footer />
		</Grommet>
	)
}