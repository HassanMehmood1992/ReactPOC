import React from 'react';
import ReactDOM from 'react-dom';
import Callgroups from './callgroups';

it('Callgroups renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Callgroups />, div);
  ReactDOM.unmountComponentAtNode(div);
});
