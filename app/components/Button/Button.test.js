// Add your tests here
import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import Button from './Button';

test('should verify two Buttons', () => {
  const { getByText } = render(<Button />);
  const button = getByText('Have a look');

  // fireEvent.press(button);

  // expect(button).toBeCalled();
});
