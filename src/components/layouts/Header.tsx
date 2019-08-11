import { Heading } from 'grommet'
import * as React from 'react';
import { useTranslation } from "react-i18next"

export default () => {
	const { t,i18n } = useTranslation()

	return(
		<Heading level="2" margin="small">{ t('header.title') }</Heading>
	);
}