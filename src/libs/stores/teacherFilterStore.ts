import { create } from "zustand";
import { type TeacherFilters } from "../../types/teacher";
import { persist } from "zustand/middleware";

interface TeacherFilterStore {
  filters: TeacherFilters,
  setLanguage: (language: string)=> void,
  setLevel: (level: string) => void,
  setPrice: (price: number) => void,
  resetFilters: ()=> void,
}

const initialFilters: TeacherFilters = {
  language: "English",
  level: "A1 Beginner",
  price: 40,
}

export const useTeachersFilterStore = create(
  persist<TeacherFilterStore>(
    (set) => ({
      filters: initialFilters,
      setLanguage: (language) => set((state) => ({ filters: { ...state.filters, language }, })),
      setLevel: (level) => set((state) => ({ filters: { ...state.filters, level }, })),
      setPrice: (price) => set((state) => ({ filters: { ...state.filters, price }, })),
      resetFilters: () => set({ filters: initialFilters })
    }),
    { name: "teacher-filters" }
  )
)