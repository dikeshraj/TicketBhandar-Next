// /stores/useFormStore.ts
import { create } from 'zustand';

interface FormStore {
  from: string;
  to: string;
  setFrom: (val: string) => void;
  setTo: (val: string) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  from: '',
  to: '',
  setFrom: (val) => set({ from: val }),
  setTo: (val) => set({ to: val }),
}));
