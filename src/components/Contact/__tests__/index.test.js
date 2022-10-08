import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    test('renders', () => {
        render(<Contact />
              );
      });

      test('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
      })

      test('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('buttontag')).toHaveTextContent('Submit')
      })
});