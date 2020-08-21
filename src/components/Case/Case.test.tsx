import * as React from 'react'
import { shallow } from 'enzyme'
import Case from './Case'

describe('Case', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Case />)
    expect(wrapper).toMatchSnapshot()
  })
})
