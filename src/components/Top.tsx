import { Box, Grid, Grommet, Heading } from 'grommet'
import * as React from "react"
import { useTranslation } from "react-i18next"
import Colaborator from './Colaborator'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Product from './Product'

export default () => {
	const { t } = useTranslation()
	const products: [] = t('products');
	const colaborators: [] = t('colaborators');

	const productList = products.map((v: any, idx: number) => (<Product product={v.product} key={idx} id={idx} />));
	const colaboratorList = colaborators.map((v: any, idx: number) => (<Colaborator profile={v.profile} key={idx} id={idx} />));

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
			/>
			<Box gridArea="colaborator" pad="medium">
				<Heading level="4">Colaborators</Heading>
				<Grid
					fill
					columns={{
						count: "fill",
						size: "small"
					}}
					gap="small"
				>
				{colaboratorList}
				</Grid>
			</Box>
			<Box gridArea="product" pad="medium">
				<Heading level="4">Products</Heading>
				<Grid
					fill
					columns={{
						count: "fill",
						size: "medium"
					}}
					gap="small"
				>
				{productList}
				</Grid>
			</Box>
			<Box gridArea="contact" pad="medium">
				<Heading level="4" >Contact Us</Heading>
			</Box>
		<Footer />
		</Grommet>
	)
}