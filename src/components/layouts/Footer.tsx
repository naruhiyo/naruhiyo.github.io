import { Text } from 'grommet'
import * as React from "react"
import { useTranslation } from "react-i18next"

export default () => {
	const { t, i18n } = useTranslation()

	return (
		<footer>
			<Text margin="small">&copy; { t('footer.copyright') }</Text>
		</footer>
	)
}