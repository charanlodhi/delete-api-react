import { render, screen } from '@testing-library/react';
import App from './App';
import {Todo} from './component/Todo';

test('renders learn react link', () => {
  render(<Todo />);
  const element = screen.getByText(/Task Name/i);
  expect(element).toBeInTheDocument()
});
