import { Box, Grid, Grommet, Heading, Image, Markdown, Text } from 'grommet'
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
	const contact: {
		head: string
		message: string
	} = t('contact')

	const productList = products.items.map((product: any, idx: number) => (<Product product={product.product} key={idx} id={idx} />));
	const collaboratorList = collaborators.items.map((collaborator: any, idx: number) => (<Collaborator profile={collaborator.profile} key={idx} id={idx} />));

	return (
		<Grommet>
			<Header />

			<Box height="large" width="100%" alignSelf="center">
				<Image fit="cover" src={t('banner')}></Image>
			</Box>

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
				<Heading level="3">{ collaborators.head }</Heading>
				<Grid
					fill
					columns={{
						count: "fill",
						size: "small"
					}}
					gap="small"
					margin={ { bottom: "large" } }
				>
				{collaboratorList}
				</Grid>
			</Box>

			<Box gridArea="product" pad="medium" background="light-1">
				<Heading level="3">{ products.head }</Heading>
				<Grid
					fill
					columns={{
						count: "fill",
						size: "medium"
					}}
					gap="small"
					margin={ { bottom: "large" } }
				>
				{productList}
				</Grid>
			</Box>

			<Box gridArea="contact" pad="medium">
				<Heading level="3" >{ contact.head }</Heading>

				<Text textAlign="center" alignSelf="center">
					<Markdown>{ contact.message }</Markdown>
				</Text>
			</Box>
		<Footer />
		</Grommet>
	)
}