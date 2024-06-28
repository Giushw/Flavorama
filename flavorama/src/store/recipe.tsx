import {create} from 'zustand';
import type {Recipes} from '@/types/decoders/recipes';

interface StoreRecipe {
  recipes: Recipes | null,
  loading: boolean,
  updateRecipe: (data: Recipes) => void,
  updateLoading: (data: boolean) => void
}

const useStoreRecipe = create<StoreRecipe>()((set) => ({
  recipes: null,
  loading: false,
  updateRecipe: (data: Recipes) => set(() => ({recipes: data})),
  updateLoading: (data: boolean) => set(() => ({loading: data})),
}));

export default useStoreRecipe;