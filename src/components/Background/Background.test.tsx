import * as React from 'react'
import { shallow } from 'enzyme'
import Background from './Background'

describe('<Background />', () => {
  test('renders', () => {
    const wrapper = shallow(<Background />)
    expect(wrapper).toMatchSnapshot()
  })
})
