import { Heading, Image, Text } from 'grommet'
import * as React from 'react';
import { useTranslation } from "react-i18next"

import png from '../../assets/brand-logo.png'

console.warn(png);

export default () => {
	const { t } = useTranslation()

	return(
		<Heading level="2" margin="small">
			<Image fit="cover" src="brandLogoPng" />
			<img src="png"></img>
			<Text>{ t('header.title') }</Text>
		</Heading>
	);
}