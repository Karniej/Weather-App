import React from 'react';
import { render } from 'react-native-testing-library';
import Header from './Header';

const defaultProps = {
  isPrimary: true,
  text: 'Header',
};

const otherProps = {
  isPrimary: false,
  text: 'Header',
};

describe('Header should match snapshot with default props', async () => {
  const { getByTestId, getAllByName } = render(<Header {...defaultProps} />);
  const header = getByTestId('Header');
  expect(header).toMatchSnapshot();

  it('header elements should have proper amount of Elements', async () => {
    const text = getAllByName('Text');
    expect(text).toHaveLength(1);
  });
});

describe('Header should match snapshot with other props', async () => {
  const { getByTestId, getAllByName } = render(<Header {...otherProps} />);
  const header = getByTestId('Header');
  expect(header).toMatchSnapshot();

  it('header elements should have proper amount of Elements', async () => {
    const text = getAllByName('Text');
    expect(text).toHaveLength(1);
  });
});
