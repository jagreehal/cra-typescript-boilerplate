import * as React from 'react';
import App from './App';
import { mount } from './setupTests';

describe('Basic tets', () => {
  it('Can mount app', () => {
    const wrapper = mount(<App />);    
    expect(wrapper).toBeDefined();
  });  
});

