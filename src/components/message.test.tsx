import { render, screen } from '@testing-library/react';
import Message from './Message';

describe('Message component testing', () => {

  it('renders without crashing', () => {
    render(<Message />);
  });

  it('renders alert messages correctly', () => {
    render(<Message />);

    const productMessage = screen.getAllByTestId('alertMessage');
    expect(productMessage).toBeDefined()

  });


});