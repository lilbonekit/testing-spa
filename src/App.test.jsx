import { screen } from '@testing-library/react';

import { renderWithRouter } from './utils/testing';
import App from './App';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));
jest.mock('./pages/Home', () => ({
  Home: () => <div data-testid="home">Home</div>,
}));
jest.mock('./pages/About', () => ({
  About: () => <div data-testid="about">About</div>,
}));
jest.mock('./pages/Contact', () => ({
  Contact: () => <div data-testid="contacts">Contact</div>,
}));
jest.mock('./pages/Category', () => ({
  Category: () => <div data-testid="category">Category</div>,
}));
jest.mock('./pages/Recipe', () => ({
  Recipe: () => <div data-testid="recipe">Recipe</div>,
}));
jest.mock('./pages/NotFound', () => ({
  NotFound: () => <div data-testid="not-found">NotFound</div>,
}));

describe('App', () => {
  it('should render App', () => {
    renderWithRouter(<App />);

    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  it('should render App with About', () => {
    renderWithRouter(<App />, { initialEntries: ['/about'] });

    expect(screen.getByTestId('about')).toBeInTheDocument();
  });

  it('should render App with Contact', () => {
    renderWithRouter(<App />, { initialEntries: ['/contacts'] });

    expect(screen.getByTestId('contacts')).toBeInTheDocument();
  });

  it('should render App with Category', () => {
    renderWithRouter(<App />, { initialEntries: ['/category/first'] });

    expect(screen.getByTestId('category')).toBeInTheDocument();
  });

  it('should render App with Recipe', () => {
    renderWithRouter(<App />, { initialEntries: ['/meal/1'] });

    expect(screen.getByTestId('recipe')).toBeInTheDocument();
  });

  it('should render App with NotFound', () => {
    renderWithRouter(<App />, { initialEntries: ['/not-found'] });

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});
