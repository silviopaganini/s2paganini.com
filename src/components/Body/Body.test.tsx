import * as React from 'react'
import { shallow } from 'enzyme'
import Body from './Body'

describe('<Body />', () => {
  test('renders', () => {
    const wrapper = shallow(<Body />)
    expect(wrapper).toMatchSnapshot()
  })
})
