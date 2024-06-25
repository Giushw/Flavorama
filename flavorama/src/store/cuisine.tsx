import {create} from 'zustand';
import {TypesList} from '@/types/decoders/common';

interface StoreCuisine {
  cuisines: TypesList | null,
  loading: boolean,
  updateCuicine: (data: TypesList) => void,
  updateLoading: (data: boolean) => void,
}

const useStoreCuisine = create<StoreCuisine>()((set) => ({
  cuisines: null,
  loading: false,
  updateCuicine: (data: TypesList) => set(() => ({cuisines: data})),
  updateLoading: (data: boolean) => set(() => ({loading: data})),
}));

export default useStoreCuisine;