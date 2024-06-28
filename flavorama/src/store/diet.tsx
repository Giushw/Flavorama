import {create} from 'zustand';
import type {TypesList} from '@/types/decoders/common';

interface StoreDiet {
  diets: TypesList | null,
  loading: boolean,
  updateDiets: (data: TypesList) => void,
  updateLoading: (data: boolean) => void
}

const useStoreDiet = create<StoreDiet>()((set) => ({
  diets: null,
  loading: false,
  updateDiets: (data: TypesList) => set(() => ({diets: data})),
  updateLoading: (data: boolean) => set(() => ({loading: data})),
}));

export default useStoreDiet;