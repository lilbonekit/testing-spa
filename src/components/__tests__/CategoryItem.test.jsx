import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testing';

import { CategoryItem } from '../CategoryItem';

describe('CategoryItem', () => {
  it('renders correctly', () => {
    renderWithRouter(
      <CategoryItem
        strCategory="Beef"
        strCategoryThumb="pic.png"
        strCategoryDescription="Lorem"
      />,
    );
    expect(screen.getByRole('article')).toMatchSnapshot();
  });
});
