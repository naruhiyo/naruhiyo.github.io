import * as React from "react"
import { useTranslation } from "react-i18next"
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import { Box, Grid } from 'grommet'

export default () => {
	const { t, i18n } = useTranslation()

	return (
		<div>
			<Header />
			<Box pad="small">
				<p>Main contents</p>
			</Box>
			<Footer />
		</div>
	)
}