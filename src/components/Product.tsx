import * as React from "react"
import { useTranslation } from "react-i18next"

type productProps = {
	product: {
		name: string;
		image: string;
		desc: string;	
	}
}

export default (props: productProps) => {
	const { t } = useTranslation()

	return (
		<div></div>
	);
}