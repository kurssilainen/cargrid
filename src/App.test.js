import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';
import Carlist from './components/Carlist';

test('App.js renders', () => {
  const { getByText } = render(<App />);
  const element = getByText(/CarList/i);
  expect(element).toBeInTheDocument();
});


/*
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/