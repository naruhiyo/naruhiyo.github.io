import * as React from 'react';
import * as style from '../scss/Hello.scss';
import 'normalize.css'
import { Grommet, Box, Button } from 'grommet';

export type HelloProps = {
  compiler: string;
  framework: string;
};

export const Hello = (props: HelloProps) => (
  <div>
    <Grommet>
      <Box align="center" background="neutral-2">
        <Button
          label="hello world"
          primary 
          onClick={() => alert('hello, world')}
        />
      </Box>
    </Grommet>
    <h1 className={style.title}>
        Hello from {props.compiler} and {props.framework}!
    </h1>
  </div>
);
