import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testing';

import { Recipe } from '../Recipe';
import * as api from '../../api';

const apiSpy = jest.spyOn(api, 'getMealById');

describe('Recipe', () => {
  it('should render correctly', async () => {
    apiSpy.mockResolvedValueOnce({
      meals: [
        {
          idMeal: '1',
          strMeal: 'First',
          strCategory: 'Category',
          strArea: 'Area',
          strInstructions: 'Instructions',
          strMealThumb: 'Thumb',
          strIngredient: 'Ingredient1',
          strMeasure1: 'Measure1',
          strYoutube: 'Youtube',
        },
      ],
    });

    renderWithRouter(<Recipe />);

    const preloader = screen.getByRole('progressbar');

    expect(preloader).toBeInTheDocument();
    await waitForElementToBeRemoved(preloader);
    expect(screen.getByRole('article')).toMatchSnapshot();
  });

  it('should render a recipe without area and youtube', async () => {
    apiSpy.mockResolvedValueOnce({
      meals: [
        {
          idMeal: '1',
          strMeal: 'First',
          strCategory: 'Category',
          strInstructions: 'Instructions',
          strMealThumb: 'Thumb',
          strIngredient: 'Ingredient1',
          strMeasure1: 'Measure1',
        },
      ],
    });

    renderWithRouter(<Recipe />);

    const preloader = screen.getByRole('progressbar');

    expect(preloader).toBeInTheDocument();
    await waitForElementToBeRemoved(preloader);
    expect(screen.getByRole('article')).toMatchSnapshot();
  });
});
