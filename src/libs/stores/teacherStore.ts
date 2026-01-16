import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Teacher } from "../../types/teacher";

interface TeacherStore {
  favorites: Teacher[],
  addToFavorites: (teacher: Teacher) => void,
  removeFromFavorites: (id: string) => void,
  isFavorite: (id: string) => boolean,
  clearFavorites: ()=> void,
}

export const useTeacherStore = create<TeacherStore>()(persist((set, get) => ({
  favorites: [],
  addToFavorites: (teacher) => {
    const { favorites } = get();
    
    if (!favorites.some((fav) => fav.id === teacher.id)) {
      set({favorites: [...favorites, teacher]})
    }
  },
  removeFromFavorites: (id) => {
    set({
      favorites: get().favorites.filter((teacher) => teacher.id !== id)
    })
  },
  isFavorite: (id) => {
    return get().favorites.some((teacher)=> teacher.id === id)
  },
  clearFavorites:()=>set({favorites: []})
}),
  {
    name: `favorite-teachers`,
  partialize: (state)=> ({favorites: state.favorites}),
  }
))
