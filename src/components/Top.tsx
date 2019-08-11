import * as React from "react"
import { useTranslation } from "react-i18next"
import Footer from './layouts/Footer'
import Header from './layouts/Header'

export default () => {
	const { t, i18n } = useTranslation()

	return (
		<div>
			<Header />

			<Footer />
		</div>
	)
}