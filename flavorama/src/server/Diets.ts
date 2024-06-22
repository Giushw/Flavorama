import type {TypesList} from '@/types/decoders/common';
import {apiClient} from './client';

/**
 * Get Diets
 * Get a list of all available diets preferences
 * No parameter
 * @returns {Promise<TypesList>} A promise that resolves to a list of diets.
 * @example 
 * const data = await getDiets();
 */
export const getDiets = async (): Promise<TypesList> => {
  try {
    const response = await apiClient.get('/diets');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
