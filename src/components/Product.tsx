import { Box, Button, Heading, Image, Text } from 'grommet'
import { Github } from 'grommet-icons'
import * as React from "react"

type productProps = {
	key: number;
	id: number;
	product: {
		name: string;
		image: string;
		desc: string;
		github: string;
	}
	size: string
}

export default (props: productProps) => {
	return (
		<Box
			elevation="large"
			key={props.id}
			pad={props.size}
			background="white"
			margin="xsmall"
		>
			<Heading level={3} margin="xsmall">{props.product.name}</Heading>

			<Box width="medium" height="small" alignSelf="center">
				<Image fit="contain" src={props.product.image} ></Image>
			</Box>

			<Text textAlign="center" margin="small" size="small">{props.product.desc}</Text>

			<Box direction="row" gap="small" pad="small" justify="start">
				{props.product.github && (
					<Button href={props.product.github} target="_blank" icon={<Github />} plain></Button>
				)}
			</Box>
		</Box>
	);
}