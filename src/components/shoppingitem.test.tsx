import { fireEvent, render, screen } from '@testing-library/react';
import ShoppingItem from './ShoppingItem';

describe('Shopping item component testing', () => {

    it('renders without crashing', () => {
      render(<ShoppingItem item={{
          id: 0,
          name: '',
          imageUrl: '',
          price: 0,
          amount: 0,
          totalPrice: 0,
          lager: 0
      }} />);
    });

    it('renders Name correctly', () => {
        render(<ShoppingItem item={{
            id: 0,
            name: '',
            imageUrl: '',
            price: 0,
            amount: 0,
            totalPrice: 0,
            lager: 0
        }} />);
    
        const name = screen.getByTestId('name') as HTMLAnchorElement;
        expect(name).toBeDefined()
      });

      it('renders picture', () => {
        render(<ShoppingItem item={{
            id: 0,
            name: '',
            imageUrl: '',
            price: 0,
            amount: 0,
            totalPrice: 0,
            lager: 0
        }} />);
    
        const productImage = screen.getByRole('img');
        expect(productImage).toBeDefined()
      });

      it('renders price correctly', () => {
        render(<ShoppingItem item={{
            id: 0,
            name: '',
            imageUrl: '',
            price: 0,
            amount: 0,
            totalPrice: 0,
            lager: 0
        }} />);
    
        const price = screen.getByTestId('price')
        expect(price).toBeDefined()
      });

      it('renders amount correctly', () => {
        render(<ShoppingItem item={{
            id: 0,
            name: '',
            imageUrl: '',
            price: 0,
            amount: 0,
            totalPrice: 0,
            lager: 0
        }} />);
    
        const amount = screen.getByTestId('amount')
        expect(amount).toBeDefined()
      });

      it('renders decrease button', () => {
        render(<ShoppingItem item={{
            id: 0,
            name: '',
            imageUrl: '',
            price: 0,
            amount: 0,
            totalPrice: 0,
            lager: 0
        }} />);
    
        const decreaseButton = screen.getByTestId('decreaseBtn');
        fireEvent.change(decreaseButton)
      });

      it('renders increase button', () => {
        render(<ShoppingItem item={{
            id: 0,
            name: '',
            imageUrl: '',
            price: 0,
            amount: 0,
            totalPrice: 0,
            lager: 0
        }} />);
    
        const increaseButton = screen.getByTestId('increaseBtn');
        fireEvent.change(increaseButton)
      });

      it('renders remove button', () => {
        render(<ShoppingItem item={{
            id: 0,
            name: '',
            imageUrl: '',
            price: 0,
            amount: 0,
            totalPrice: 0,
            lager: 0
        }} />);
    
        const removeButton = screen.getByTestId('removeBtn');
        fireEvent.click(removeButton)
      });

});
