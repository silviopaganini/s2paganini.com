import * as React from 'react';
import { shallow } from 'enzyme';
import Project from './Project';

describe('<Project />', () => {
  test('renders', () => {
    const wrapper = shallow(<Project />);
    expect(wrapper).toMatchSnapshot();
  });
});
  