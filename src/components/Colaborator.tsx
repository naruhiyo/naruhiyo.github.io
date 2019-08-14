import * as React from "react"
import { useTranslation } from "react-i18next"

type colaboratorProps = {
	profile: {
		name: string,
		image: string,
		link: {
			github: string,
			portfolio: string,
			qiita: string
		}
	}
}

export default (props: colaboratorProps) => {
	const { t } = useTranslation()

	return (
		<div></div>
	);
}