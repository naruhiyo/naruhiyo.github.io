import { Box, Grid, Image, Select, Text } from 'grommet'
import * as React from 'react';
import { useTranslation } from "react-i18next"
import brandLogoPng from '../../assets/brand-logo.png'

export default () => {
	const { t } = useTranslation()
  const [value, setValue] = React.useState('ja');

	return(
			<Grid
				fill
				columns={["auto", "flex"]}
				rows={["auto", "flex"]}
				areas={[
					{ name: "logo", start: [0, 0], end: [1, 0] }
				]}
			>
			<Box
						gridArea="logo"
						direction="row"
						align="center"
						justify="between"
						pad={{ horizontal: "medium", vertical: "small" }}
					>
					<Box direction="row" align="center">
						<Box width="xxsmall" height="xxsmall">
							<Image fit="cover" src={brandLogoPng} />
						</Box>
						<Box pad={{ horizontal: "small" }}>
							<Text>{ t('header.title') }</Text>
						</Box>
					</Box>

					<Box width="xsmall">
						<Select
							options={['ja', 'en']}
							value={value}
							onChange={({ option }) => setValue(option) }
						/>
					</Box>
			</Box>
			</Grid>
	);
}