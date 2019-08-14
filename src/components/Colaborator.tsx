import { Box, Button, Heading, Image, Text } from 'grommet'
import * as React from "react"
import { Github, Link } from 'grommet-icons'

type colaboratorProps = {
	key: number;
	id: number;
	profile: {
		name: string;
		image: string;
		bio: string;
		link: {
			github: string;
			portfolio: string;
			qiita: string;
		}
	}
}

export default (props: colaboratorProps) => {
	return (
		<Box
			elevation="large"
			key={props.id}
			pad="xxsmall"
		>
		<Box width="small" height="small" justify="center">
			<Image fit="cover" src={props.profile.image} ></Image>
		</Box>
		<Heading level={5} textAlign="center" margin={ { vertical: "small"} }>{props.profile.name}</Heading>
		<Text textAlign="center" size="small">{props.profile.bio}</Text>

		<Box direction="row" gap="small" pad="small" justify="end">
			{props.profile.link.github && (
				<Button href={props.profile.link.github} icon={<Github />} plain></Button>
			)}
			{props.profile.link.portfolio && (
				<Button href={props.profile.link.portfolio} icon={<Link />} plain></Button>
			)}
			{props.profile.link.qiita && (
				<Button href={props.profile.link.qiita} icon={<Link />} plain></Button>
			)}
		</Box>
  </Box>
	);
}