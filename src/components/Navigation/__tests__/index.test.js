import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Navigation component', () => {
    test('renders', () => {
        render(<Navigation 
                  categories={categories}
                  setCurrentCategory={mockSetCurrentCategory}
                  currentCategory={mockCurrentCategory}
                  contactSelected={mockContactSelected}
                  setContactSelected={mockSetContactSelected}
                />
              );
      });
   
      test('matches snapshot', () => {
        const { asFragment } = render(<Navigation 
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
          contactSelected={mockContactSelected}
          setContactSelected={mockSetContactSelected}
          />);
      
        expect(asFragment()).toMatchSnapshot();
      });
});

describe('emoji is visible', () => {
    test('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Navigation 
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
          contactSelected={mockContactSelected}
          setContactSelected={mockSetContactSelected}
        />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Navigation 
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
          contactSelected={mockContactSelected}
          setContactSelected={mockSetContactSelected}
        />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');

      // Assert
    });
})