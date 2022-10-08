import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '..';

afterEach(cleanup);

describe('Navigation component', () => {
    test('renders', () => {
        render(<Navigation />);
      });
   
      test('matches snapshot', () => {
        const { asFragment } = render(<Navigation />);
      
        expect(asFragment()).toMatchSnapshot();
      });
});

describe('emoji is visible', () => {
    test('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Navigation />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Navigation />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');

      // Assert
    });
})