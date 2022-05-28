import { Box, Button, Heading, Image, Text } from 'grommet'
import { Article, Github, Link } from 'grommet-icons'
import React from 'react'

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
      atcoder: string
    }
  }
  size: string
}

const Collaborator = (props: collaboratorProps) => {
  return (
    <Box a11yTitle="Collaborator Components" elevation={props.size} key={props.id} background="white" pad={props.size}>
      <Box height="small" width="small" alignSelf="center" pad="small">
        <Image fit="contain" src={props.profile.image}></Image>
      </Box>
      <Heading level={5} textAlign="center" margin={{ vertical: 'small' }}>
        {props.profile.name}
      </Heading>

      <Text textAlign="center" margin="small" size="small">
        {props.profile.bio}
      </Text>

      {props.profile.link.github && (
        <Button href={props.profile.link.github} target="_blank" plain hoverIndicator="light-3">
          <Box direction="row" pad="small">
            <Github />
            <Text margin={{ left: 'xsmall' }}>Github</Text>
          </Box>
        </Button>
      )}
      {props.profile.link.portfolio && (
        <Button href={props.profile.link.portfolio} target="_blank" plain hoverIndicator="light-3">
          <Box direction="row" pad="small">
            <Link />
            <Text margin={{ left: 'xsmall' }}>Portfolio</Text>
          </Box>
        </Button>
      )}
      {props.profile.link.atcoder && (
        <Button href={props.profile.link.atcoder} target="_blank" plain hoverIndicator="light-3">
          <Box direction="row" pad="small">
            <Article />
            <Text margin={{ left: 'xsmall' }}>AtCoder</Text>
          </Box>
        </Button>
      )}
    </Box>
  )
}

export default Collaborator
