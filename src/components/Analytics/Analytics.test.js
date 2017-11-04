import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Analytics from './Analytics'

test('Analytics component should render as expected', () => {
    const component = shallow(<Analytics />)
    const  tree = toJson(component)
    expect(tree).toMatchSnapshot()
})
