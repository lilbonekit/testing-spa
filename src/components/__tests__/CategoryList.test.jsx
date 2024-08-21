import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testing';

import { CategoryList } from '../CategoryList';

describe('CategoryList', () => {
  it('renders correctly', () => {
    renderWithRouter(
      <CategoryList
        catalog={[
          {
            idCategory: '1',
            strCategory: 'Beef',
            strCategoryThumb: 'themodi.png',
            strCategoryDescription: 'strCategoryDescription',
          },
        ]}
      />,
    );
    expect(screen.getByRole('list')).toMatchSnapshot();
  });

  it('renders correctly with no items', () => {
    renderWithRouter(<CategoryList />);
    expect(screen.getByRole('list')).toMatchSnapshot();
  });
});
