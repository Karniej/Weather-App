import React from 'react';
import { render } from 'react-native-testing-library';
import ListElement from './ListElement';

const defaultProps = {
  dt_txt: '2020-03-06 04:00',
  main: {
    temp: 275,
    feels_like: 270,
  },
  weather: [{ description: 'broken clouds' }],
};
const { getByTestId, getAllByName } = render(<ListElement {...defaultProps} />);
const listElement = getByTestId('ListElement');

test('ListElement should match snapshot', async () => {
  expect(listElement).toMatchSnapshot();
});

test('ListElement elements should have proper amount of Elements', async () => {
  const texts = getAllByName('Text');
  const views = getAllByName('View');
  expect(texts).toHaveLength(5);
  expect(views).toHaveLength(5);
});
