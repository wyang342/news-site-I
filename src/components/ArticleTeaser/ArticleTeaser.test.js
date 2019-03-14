import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import sinon from 'sinon';
import ArticleTeaser from './ArticleTeaser';

it('renders without crashing', () => {
  const component = mount(<ArticleTeaser />);
});

it('accepts title and created_date', () => {
  const component = mount(<ArticleTeaser id={1} title="Test Headline" createdDate="2017-02-10T03:00:25-05:00" />);
  expect(component.html().indexOf('<a href="#">Test Headline</a>')).toBeGreaterThan(-1);
  expect(component.contains(<p>2017-02-10T03:00:25-05:00</p>)).toEqual(true);
});

it('click triggers this.props.handleTitleClick and passes this.props.id', () => {
  const handleTitleClick = sinon.spy();
  const component = mount(<ArticleTeaser handleTitleClick={handleTitleClick} id={12} title="Test Headline" created_date="2017-02-10T03:00:25-05:00" />);
  component.find('a').simulate('click');
  expect(handleTitleClick).toHaveProperty('callCount', 1);
  expect(handleTitleClick.calledWith(12)).toEqual(true);
});

