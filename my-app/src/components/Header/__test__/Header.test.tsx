import React from 'react';
import Header from '../';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Header contains Home link', () => {
  const component = render(
    <Router>
      <Header />
    </Router>
  );
  const content = component.getByTestId('header');

  expect(content.textContent).toContain('Home');
});

test('Header contains About us link', () => {
  const component = render(
    <Router>
      <Header />
    </Router>
  );
  const content = component.getByTestId('header');

  expect(content.textContent).toContain('About us');
});
