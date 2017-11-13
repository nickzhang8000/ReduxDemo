import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Main from '../client/components/Main';

describe('Enzyme Shallow', function () {
  it('App\'s title should be Todos', function () {
    let app = shallow(<Main/>);
    expect(app.find('h1').text()).to.equal('Todos');
  });
});
