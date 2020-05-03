import React from 'react';
import{shallow} from 'enzyme';
import OrderOption from './OrderOption.js';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='Lore Ipsum' name='Lorem ipsum' />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render correct title', () => {
    const expectedName='namename';
    const component = shallow(<OrderOption type='dropdown' name={expectedName} />);
    expect(component.find('.title').text()).toEqual(expectedName);
  });
});