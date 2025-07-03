import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders overview list of labs', () => {
    render(<App />);
    const labHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(labHeadings.length).toBe(10);
  });
});
