import { Box, Heading } from 'grommet'
import * as React from "react"

type productProps = {
	key: number;
	id: number;
	product: {
		name: string;
		image: string;
		desc: string;
	}
}

export default (props: productProps) => {
	return (
		<Box
			elevation="large"
			key={props.id}
			pad="small"
		>
    <Heading level={3}>{props.product.name}</Heading>
  </Box>
	);
}