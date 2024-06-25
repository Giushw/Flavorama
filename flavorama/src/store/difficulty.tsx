import {create} from 'zustand';
import {TypesList} from '@/types/decoders/common';

interface StoreDifficulty {
  difficulties: TypesList | null,
  loading: boolean,
  updateDifficulties: (data: TypesList) => void,
  updateLoading: (data: boolean) => void,
}

const useStoreDifficulty = create<StoreDifficulty>()((set) => ({
  difficulties: null,
  loading: false,
  updateDifficulties: (data: TypesList) => set(() => ({difficulties: data})),
  updateLoading: (data: boolean) => set(() => ({loading: data})),
}));

export default useStoreDifficulty;