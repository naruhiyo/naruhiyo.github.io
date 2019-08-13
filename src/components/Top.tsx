import * as React from "react"
import { useTranslation } from "react-i18next"
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import { Grommet, Box, Grid } from 'grommet'

export default () => {
	const { t } = useTranslation()

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
				<p>Colaborators</p>
			</Box>
			<Box gridArea="product" pad="medium">
				<p>Products</p>
			</Box>
			<Box gridArea="contact" pad="medium">
				<p>Contact Us</p>
			</Box>
		<Footer />
		</Grommet>
	)
}