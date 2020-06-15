import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import { findByTestAttr } from '../utils/index'

const setup = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
}


describe('Header component', () => {

    let _component;
    beforeEach(() => {
        _component = setup()//The component shallow renders before each test
    })

    it('should render without errors', () => {
        //    const wrapper = component.find(`[data-test='headerComp']`);//data-test is used to avoid class confusion
        const wrapper = findByTestAttr(_component, 'headerComp')
        expect(wrapper.length).toBe(1)
    })

    it('should render logo', () => {
        // const logo = component.find(`[data-test='imgLogo']`);
        const logo = findByTestAttr(_component, 'imgLogo')
        expect(logo.length).toBe(1)
    })
})