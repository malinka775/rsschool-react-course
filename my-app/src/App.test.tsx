import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders 404 page when bad route', () => {
  render(
    <MemoryRouter initialEntries={['/bad-route']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
});
