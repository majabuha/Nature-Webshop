import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login component testing', () => {

    it('renders without crashing', () => {
      render(<Login/>);
    });

      it('renders logout button', () => {
        render(<Login/>);
    
        const logoutButton = screen.getByRole('button');
        userEvent.click(logoutButton)
      });

    it('renders username correctly', () => {
        render(<Login/>);
    
        const name = screen.getByPlaceholderText('Type your username here');
        expect(name).toBeDefined()
      });

      it('renders password correctly', () => {
        render(<Login/>);
    
        const password = screen.getByPlaceholderText('Type your password here');
        expect(password).toBeDefined()
      });

      it('renders login button', () => {
        render(<Login/>);
    
        const loginButton = screen.getByTestId('post-button');
        userEvent.click(loginButton)
      });




});
