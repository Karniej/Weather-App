// Add your tests here
import { render, fireEvent } from 'react-native-testing-library';
import Button from './Button';

function getForecastData(Button, answer) {
  fireEvent.changeText(Button, answer);
}

test('should verify two Buttons', () => {
  const { getAllByA11yRole, getByText } = render(<Button />);
  const allButtons = getAllByA11yRole('header');

  getForecastData(allButtons[0], 'a1');
  getForecastData(allButtons[1], 'a2');

  fireEvent.press(getByText('submit'));

  expect(props.verifyButtons).toBeCalledWith({
    '1': { q: 'q1', a: 'a1' },
    '2': { q: 'q2', a: 'a2' },
  });
});
