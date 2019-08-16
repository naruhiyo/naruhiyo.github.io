import { Box, Grid, Text } from 'grommet'
import * as React from "react"
import { useTranslation } from "react-i18next"

export default () => {
	const { t } = useTranslation()
	const FooterText: any = t('footer')

	return (
		<Grid
				fill
				columns={["auto", "flex"]}
				rows={["auto"]}
				areas={[
					{ name: "footer", start: [0, 0], end: [1, 0] }
				]}
			>
			<Box gridArea="footer" align="center" justify="center">
				<Text margin="small">&copy; { FooterText.copyright }</Text>
			</Box>
		</Grid>
	)
}