import { Hello } from '../../src/components/Hello';
import { shallow } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

describe('<Hello />', () => {
  describe('with react-test-renderer', () => {
    const component = renderer.create(
      <Hello compiler="TypeScript" framework="React" />
    );
    it('should display Hello', () => {
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('with enzyme', () => {
    it('should display expected elements', () => {
      const wrapper = shallow(
        <Hello compiler="TypeScript" framework="React" />
      );
      expect(wrapper.text()).toBe('Hello from TypeScript and React!');
    });
  });
});
