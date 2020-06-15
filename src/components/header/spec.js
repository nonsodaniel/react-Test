import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
const component = shallow(<Header />);

describe('Header component', () => {
    it('should render without errors', () => {
        console.log(component.debug())
        const wrapper = component.find('.headerComp');
        expect(wrapper.length).toBe(1)
    })

    it('should render logo', () => {
        const logo = component.find('.imgLogo');
        expect(logo.length).toBe(1)
    })
})