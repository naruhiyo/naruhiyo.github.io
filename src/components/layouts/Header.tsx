import { Heading } from 'grommet'
import * as React from 'react';
import { useTranslation } from "react-i18next"
import test from './test.png'

export default () => {
	const { t,i18n } = useTranslation()

	return (
		<Heading level="2" margin="small">{t('header.title')}
			<img src={test} alt="" />
		</Heading>
	);
}
