import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import sinon from 'sinon';
import AppNav from './AppNav';

const navItems = [{
  label: "NATIONAL",
  value: "national"
},
{
  label: "POLITICS",
  value: "politics"
}]

it('renders without crashing', () => {
  const component = mount(<AppNav navItems={navItems} />);
});

it('accepts navItems', () => {
  const component = mount(<AppNav navItems={navItems} />);
  expect(component.find('nav').length).toEqual(1);
  expect(component.text()).toEqual('NATIONALPOLITICS');
});

it('click triggers this.props.handleNavClick and passes clicked nav item value', () => {
  const handleNavClick = sinon.spy();
  const component = mount(<AppNav navItems={navItems} handleNavClick={handleNavClick} />);
  component.find('a').first().simulate('click');
  expect(handleNavClick).toHaveProperty('callCount', 1);
  expect(handleNavClick.calledWith('national')).toEqual(true);
});
