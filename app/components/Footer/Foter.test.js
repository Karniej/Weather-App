import React from 'react';
import { render } from 'react-native-testing-library';
import Footer from './Footer';

const { getByTestId, getAllByName } = render(<Footer />);
const footer = getByTestId('Footer');

test('Footer should match snapshot', async () => {
  expect(footer).toMatchSnapshot();
});

test('Footer elements should have proper amount of Elements', async () => {
  const image = getAllByName('Image');
  const view = getAllByName('View');
  expect(image).toHaveLength(1);
  expect(view).toHaveLength(1);
});
