import { render, screen } from '@testing-library/react';
import TestDummyComponent from './components/test-dummy/TestDummyComponent';


test('renders learn react link', () => {
  render(<TestDummyComponent />);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});
