import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import Button from './Button';

const defaultProps = {
  onPress: jest.fn(),
};
const { getByTestId, getAllByName } = render(<Button {...defaultProps} />);
const button = getByTestId('Button');

test('Button should have been called after firing an Event', async () => {
  fireEvent.press(button);
  expect(defaultProps.onPress).toHaveBeenCalled();
});

test('Button should match snapshot', async () => {
  expect(button).toMatchSnapshot();
});

test('Button elements should have proper amount of Elements', async () => {
  const text = getAllByName('Text');
  const touchableOpacity = getAllByName('TouchableOpacity');
  expect(text).toHaveLength(1);
  expect(touchableOpacity).toHaveLength(1);
});
