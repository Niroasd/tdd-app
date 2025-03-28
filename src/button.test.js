/**
 * @jest-environment jsdom
 */

import {describe, it, expect} from '@jest/globals';
import React from 'react';
import Counter from './components/Counter';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Counter Component Tests', () => {
  it('renders Counter component correctly', () => {
    render(<Counter initialCount={5} />);
    expect(screen.getByText('Counter: 5')).toBeInTheDocument();
  });

  it('increments counter on button click', () => {
    render(<Counter initialCount={0} />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
  });

  it('decrements counter on button click', () => {
    render(<Counter initialCount={0} />);
    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByText('Counter: -1')).toBeInTheDocument();
  });
});