import * as React from 'react'
import { shallow } from 'enzyme'
import Projects from './Projects'

describe('<Projects />', () => {
  test('renders', () => {
    const wrapper = shallow(<Projects title="experiments" data={[]} />)
    expect(wrapper).toMatchSnapshot()
  })
})
