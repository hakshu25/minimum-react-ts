import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

test('Check Title', () => {
  const component = render(<App />);
  expect(component.getByRole('heading').innerHTML).toContain('Hello World');
});
