import { render, screen, fireEvent } from '@testing-library/react';
import TestDummyComponent from './components/test-dummy/TestDummyComponent';
import CounterTest from './components/Tests/CounterTest';


test('renders learn react link ', () => {
  render(<TestDummyComponent />);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders counter with initial value', () => {
  const { getByText } = render(<CounterTest />);
  const counterElement = getByText('Counter: 0');
  expect(counterElement).toBeInTheDocument();
});

test('increments counter when the button is clicked', () => {
  const { getByText } = render(<CounterTest />);
  const counterElement = getByText('Counter: 0');
  const buttonElement = getByText('Increment');

  fireEvent.click(buttonElement);

  expect(counterElement).toHaveTextContent('Counter: 1');
});