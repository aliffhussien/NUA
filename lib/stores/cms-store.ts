import { create } from 'zustand';

interface CmsStore {
  isEditMode: boolean;
  toggleEditMode: () => void;
}

export const useCmsStore = create<CmsStore>((set) => ({
  isEditMode: false,
  toggleEditMode: () => set((state) => ({ isEditMode: !state.isEditMode })),
}));
