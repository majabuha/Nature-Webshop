window.alert = jest.fn();

import { fireEvent, render, screen } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

describe('Shopping cart component testing', () => {

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<ShoppingCart />);
  });


  it('displays title correctly', () => {
    render(<ShoppingCart />);

    const title = screen.getByTestId('shopTitle') as HTMLAnchorElement;
    expect(title).toBeInTheDocument

  });

  it('displays product number correctly', () => {
    render(<ShoppingCart />);

    const title = screen.getByTestId('shopPdtNb');
    expect(title).toBeDefined()

  });

  it('displays product price correctly', () => {
    render(<ShoppingCart />);

    const title = screen.getByTestId('shopTtlPr');
    expect(title).toBeDefined()

  });

  it('displays product delete button working correctly', () => {
    render(<ShoppingCart />);

    const delButton = screen.getByTestId('shopDelBtn');
    fireEvent.click(delButton)

  });

  it('displays product checkout button working correctly', () => {
    render(<ShoppingCart />);

    const ckotButton = screen.getByTestId('shopCkoBtn');
    fireEvent.click(ckotButton)

  });

});