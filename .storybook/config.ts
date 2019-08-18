import { configure, addParameters, addDecorator } from '@storybook/react';
// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /\.stories\.tsx$/);
import { withOptions } from '@storybook/addon-options'

function loadStories() {
  req.keys().forEach(req);
}
addParameters({
  viewport: {
    defaultViewport: 'iphone6p',
  }
})

addDecorator(
  withOptions({
    addonPanelInRight: true,
  }),
)

configure(loadStories, module);
