import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary.js';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='alt' days={1} tags={[]} cost='cost' />);
    expect(component).toBeTruthy();
  });

  it('generate proper link with id', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} image='image.jpg' name='alt' days={1} tags={[]} cost='cost' />);
    expect(component.find('Link').prop('to')).toEqual('/trip/abc');
  });

  it('img have proper src and alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'alt';
    const component = shallow(<TripSummary id='abc' image={expectedSrc} name={expectedAlt} days={1} tags={[]} cost='cost' />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost, days', () => {
    const expectedName = 'alt';
    const expectedCost = '1500';
    const expectedDays = 2;
    const component = shallow(<TripSummary id='abc' image='image.jpg' name={expectedName} days={expectedDays} tags={[]} cost={expectedCost} />);
    expect(component.find('.details').childAt(0).text()).toEqual('2 days');
    expect(component.find('.details').childAt(1).text()).toEqual('from 1500');
    expect(component.find('.title').text()).toEqual('alt');
  });

  it('should throw error without required props (id, image, name, cost, days)', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags in spans an in correct order', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='name' days={1} tags={['tag1', 'tag2', 'tag3']} cost='cost' />);

    expect(component.find('.tag').at(0).text()).toEqual('tag1');
    expect(component.find('.tag').at(0).type()).toEqual('span');
    expect(component.find('.tag').at(1).text()).toEqual('tag2');
    expect(component.find('.tag').at(1).type()).toEqual('span');
    expect(component.find('.tag').at(2).text()).toEqual('tag3');
    expect(component.find('.tag').at(2).type()).toEqual('span');
  });

  it('should not render div with class tags if prop tags is an empty [] or without this prop', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='alt' days={1} tags={[]} cost='cost'/>);
    expect(component.find('.tags')).toHaveLength(0);
  });
});