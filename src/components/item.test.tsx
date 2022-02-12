import { fireEvent, render, screen } from '@testing-library/react';
import Item from './Item';

describe('Item component testing', () => {

  it('renders without crashing', () => {
    render(<Item item={{
        id: 0,
        name: '',
        description: '',
        imageUrl: '',
        price: 0,
        amount: 0,
        totalPrice: 0,
        lager: 0
    }} />);
  });

  it('renders title correctly', () => {
    render(<Item item={{
        id: 0,
        name: '',
        description: '',
        imageUrl: '',
        price: 0,
        amount: 0,
        totalPrice: 0,
        lager: 0
    }} />);

    const title = screen.getByTestId('title') as HTMLAnchorElement;
    expect(title).toBeDefined()
  });

  it('renders item picture', () => {
    render(<Item item={{
        id: 0,
        name: '',
        description: '',
        imageUrl: '',
        price: 0,
        amount: 0,
        totalPrice: 0,
        lager: 0
    }} />);

    const productImage = screen.getByRole('img');
    expect(productImage).toBeDefined()
  });

  it('renders show and hide after clicking the product button', () => {
    render(<Item item={{
        id: 0,
        name: '',
        description: '',
        imageUrl: '',
        price: 0,
        amount: 0,
        totalPrice: 0,
        lager: 0
    }} />);

    const productButton = screen.getByRole('button');
    fireEvent.change(productButton)
  });
});