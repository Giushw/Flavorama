import type {TypesList} from '@/types/decoders/common';
import {apiClient} from './client';

/**
 * Get Difficulties
 * Get a list of all available difficulty levels.
 * No parameter
 * @returns {Promise<TypesList>} A promise that resolves to a list of difficulties.
 * @example 
 * const data = await getDifficulties();
 */
export const getDifficulties = async (): Promise<TypesList> => {
  try {
    const response = await apiClient.get('/difficulties');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
  
};
