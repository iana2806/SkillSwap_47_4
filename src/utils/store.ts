import { categoriesReducer } from '@/store/categories'
import { citiesReducer } from '@/store/cities'
import { filterReducer } from '@/store/filter'
import { configureStore } from '@reduxjs/toolkit'

import { data as categoriesData } from '../../mock/api/categories'
import { data as citiesData } from '../../mock/api/cities'

const { categories, subcategories } = categoriesData ?? {}
const { cities } = citiesData ?? {}

const preloadedFilterState: ReturnType<typeof filterReducer> = {
  role: 'learn',
  subcategories: [],
  gender: 'female',
  cities: [],
  search: '',
  sort: { by: '', direction: 'desc' },
}

export const mockStore = configureStore({
  reducer: {
    categories: categoriesReducer,
    cities: citiesReducer,
    filter: filterReducer,
  },
  preloadedState: {
    categories: {
      categories,
      subcategories,
      loading: false,
      error: null,
    },
    cities: {
      loading: false,
      error: null,
      cities,
    },
    filter: preloadedFilterState,
  },
})
