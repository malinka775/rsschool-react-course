import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductsList from '../';

test('renders "Sorry, nothing matches your requirements" when no props', () => {
  const props = {
    data: null,
  };
  render(<ProductsList data={props.data} />);
  expect(screen.getByText('Sorry, nothing matches your requirements')).toBeInTheDocument();
});
