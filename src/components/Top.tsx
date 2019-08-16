import { Box, Grid, Grommet, Heading } from 'grommet'
import * as React from "react"
import { useTranslation } from "react-i18next"
import Collaborator from './Collaborator'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Product from './Product'

export default () => {
	const { t } = useTranslation()
	const products: {
		head: string
		items: []
	} = t('products');
	const collaborators: {
		head: string
		items: []
	} = t('collaborators');

	const productList = products.items.map((product: any, idx: number) => (<Product product={product.product} key={idx} id={idx} />));
	const collaboratorList = collaborators.items.map((collaborator: any, idx: number) => (<Collaborator profile={collaborator.profile} key={idx} id={idx} />));

	return (
		<Grommet>
			<Header />
			
			<Grid
				fill
				columns={["auto", "flex"]}
				rows={["auto", "flex"]}
				areas={[
					{ name: "collaborator", start: [0, 0], end: [1, 0] },
					{ name: "product", start: [1, 0], end: [2, 0] },
					{ name: "contact", start: [1, 0], end: [2, 0] }
				]}
			/>

			<Box gridArea="collaborator" pad="medium">
				<Heading level="4">Collaborators</Heading>
				<Grid
					fill
					columns={{
						count: "fill",
						size: "small"
					}}
					gap="small"
				>
				{collaboratorList}
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