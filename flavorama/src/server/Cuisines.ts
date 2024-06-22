import type {TypesList} from '@/types/decoders/common';
import {apiClient} from './client';

/**
 * Get Cuisines
 * Get a list of all available cuisines.
 * No parameter
 * @returns {Promise<TypesList>} A promise that resolves to a list of cuisines.
 * @example 
 * const data = await getCuisines();
 */
export const getCuisines = async (): Promise<TypesList> => {
  try {
    const response = await apiClient.get('/cuisines');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
