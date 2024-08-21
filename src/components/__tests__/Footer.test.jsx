import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testing';

import { Footer } from '../Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    renderWithRouter(<Footer />);

    expect(screen.getByText(/Copyright Text/)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
