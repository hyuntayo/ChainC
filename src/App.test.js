// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainC title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainC/i);
    expect(titleElement).toBeInTheDocument();
});
