// import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);

    // check if App components renders headline
  });
});




// describe('something truthy and falsy', () => {
//   it('true to be true', () => {
//     expect(true).toBe(true);
//   });

//   it('false to be false', () => {
//     expect(false).toBe(false);
//   });
// });