import { Box, Button, Heading, Image, Text } from 'grommet'
import { Article, Github, Link } from 'grommet-icons'
import * as React from 'react'

type collaboratorProps = {
  key: number
  id: number
  profile: {
    name: string
    image: string
    bio: string
    link: {
      github: string
      portfolio: string
      qiita: string
    }
  }
  size: string
}

const Collaborator = (props: collaboratorProps) => {
  return (
    <Box
      a11yTitle="Collaborator Components"
      elevation={props.size}
      key={props.id}
      background="white"
      pad={props.size}
    >
      <Box height="small" width="small" alignSelf="center" pad="small">
        <Image fit="contain" src={props.profile.image}></Image>
      </Box>
      <Heading level={5} textAlign="center" margin={{ vertical: 'small' }}>
        {props.profile.name}
      </Heading>

      <Text textAlign="center" margin="small" size="small">
        {props.profile.bio}
      </Text>

      <Box direction="row" gap="small" pad="small" justify="start">
        {props.profile.link.github && (
          <Button
            href={props.profile.link.github}
            target="_blank"
            icon={<Github />}
            plain
          ></Button>
        )}
        {props.profile.link.portfolio && (
          <Button
            href={props.profile.link.portfolio}
            target="_blank"
            icon={<Link />}
            plain
          ></Button>
        )}
        {props.profile.link.qiita && (
          <Button
            href={props.profile.link.qiita}
            target="_blank"
            icon={<Article />}
            plain
          ></Button>
        )}
      </Box>
    </Box>
  )
}

export default Collaborator
