import * as React from 'react';
import { shallow } from 'enzyme';
import Awards from './Awards';

describe('<Awards />', () => {
  test('renders', () => {
    const wrapper = shallow(<Awards />);
    expect(wrapper).toMatchSnapshot();
  });
});
  