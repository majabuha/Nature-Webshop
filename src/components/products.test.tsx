import {  render, screen } from '@testing-library/react';
import Products from './Products';


describe('Products component testing', () => {

    it('renders without crashing', () => {
      render(<Products />);
    });

  
    it('displays ul working correctly', () => {
      render(<Products />);
  
    const productUl = screen.getByTestId('productsUl');
    expect(productUl).toBeDefined()

    });
    
  });