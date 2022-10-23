import { Box, Button, Heading, Text } from 'grommet';
import { Github } from 'grommet-icons';
import React from 'react';

type activityProps = {
  key: number;
  id: number;
  activity: {
    name: string;
    desc: string;
    github: string;
  };
  size: string;
};

const Activity = (props: activityProps) => {
  return (
    <Box elevation="large" key={props.id} pad={props.size} background="white" margin="xsmall">
      <Heading level={3} margin="xsmall">
        {props.activity.name}
      </Heading>

      <Text textAlign="center" margin="small" size="small">
        {props.activity.desc}
      </Text>

      {props.activity.github && (
        <Button href={props.activity.github} target="_blank" plain hoverIndicator="light-3">
          <Box direction="row" pad="small">
            <Github />
            <Text margin={{ left: 'xsmall' }}>Github</Text>
          </Box>
        </Button>
      )}
    </Box>
  );
};

export default Activity;
