import { CATEGORIES_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const categoriesApiSlice = apiSlice.injectEndpoints({
endpoints: (builder) => ({
    getCategories: builder.query({
        query: () => ({
            url: `${CATEGORIES_URL}`
        }),
        providesTags: ['Category'],
    })
})
});

export const {
    useGetCategoriesQuery
} = categoriesApiSlice;