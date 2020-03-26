import React from 'react';
import {
  render,
  fireEvent,
  NativeTestEvent,
} from 'react-native-testing-library';
import ListHeader from './ListHeader';

const defaultProps = {
  onPress: jest.fn(),
  onChangeText: jest.fn(),
  onSubmitEditing: jest.fn(),
};
const { getByTestId, getAllByName, getByName } = render(
  <ListHeader {...defaultProps} />,
);
const listHeader = getByTestId('ListHeader');
const button = getByTestId('Button');
const textInput = getByName('TextInput');

test('Button should have been called after firing an onPressEvent', async () => {
  fireEvent.press(button);
  expect(defaultProps.onPress).toHaveBeenCalled();
});

test('TextInput should have been called after firing an onPress Event', async () => {
  fireEvent.changeText(textInput, 'London');
  expect(defaultProps.onChangeText).toHaveBeenCalled();
});

test('TextInput should have been called after firing an onSubmitEdititng Event', async () => {
  fireEvent(
    textInput,
    new NativeTestEvent('onSubmitEditing', {
      nativeEvent: { value: 'testing' },
    }),
  );
  expect(defaultProps.onSubmitEditing).toHaveBeenCalled();
});

test('ListHeader should match snapshot', async () => {
  expect(listHeader).toMatchSnapshot();
});

test('ListHeader elements should have proper amount of Elements', async () => {
  const texts = getAllByName('Text');
  const views = getAllByName('View');
  const buttons = getAllByName('Button');
  const headers = getAllByName('Header');
  const textInput = getAllByName('TextInput');
  expect(texts).toHaveLength(4);
  expect(textInput).toHaveLength(1);
  expect(buttons).toHaveLength(1);
  expect(headers).toHaveLength(2);
  expect(views).toHaveLength(3);
});
