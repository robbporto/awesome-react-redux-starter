import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('Home page', () => {
  it('renders Home component without crashing', () => {
    shallow(<Home props={{}} />);
  });
});
