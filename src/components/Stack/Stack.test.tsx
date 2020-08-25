import * as React from 'react'
import { shallow } from 'enzyme'
import Stack from './Stack'

describe('<Stack />', () => {
  test('renders', () => {
    const wrapper = shallow(<Stack />)
    expect(wrapper).toMatchSnapshot()
  })
})
