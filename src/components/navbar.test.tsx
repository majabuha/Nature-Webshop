import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';

describe('Navbar component testing', () => {

  it('renders without crashing', () => {
    render(<Navbar />);
  });

  it('displays clear button working correctly', () => {
    render(<Navbar />);

    const clearButton = screen.getByTestId('clearFltBtn');
    fireEvent.click(clearButton)
  });

  it('displays submit button working correctly', () => {
    render(<Navbar />);

    const submitButton = screen.getByTestId('submitBtn');
    userEvent.click(submitButton);
  });

  it('displays navbar button working correctly', () => {
    render(<Navbar />);

    const navbarButton = screen.getByTestId('navbarBtn');
    userEvent.click(navbarButton);
  });

});