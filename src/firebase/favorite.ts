import { ref, set, remove, get } from "firebase/database";
import { db } from "../firebase/firebase";
import type { Teacher } from "../types/teacher";
import type { User } from "firebase/auth";


export const addToFavorites = async (user: User, teacher: Teacher) => {
  if (!user) return;
  await set(ref(db, `users/${user.uid}/favorites/${teacher.id}`), {
    id: teacher.id,
    name: teacher.name,
    surname: teacher.surname,
    languages:teacher.languages,
    levels: teacher.levels,
    rating: teacher.rating,
    reviews: teacher.reviews,
    price_per_hour: teacher.price_per_hour,
    lessons_done: teacher.lessons_done,
    avatar_url: teacher.avatar_url,
    lesson_info: teacher.lesson_info,
    conditions: teacher.conditions,
    experience: teacher.experience
  });
};

export const removeFromFavorites = async (user: User, teacherId: string) => {
  if (!user) return;
  await remove(ref(db, `users/${user.uid}/favorites/${teacherId}`));
};

export const isFavorite = async (user: User, teacherId: string) => {
  if (!user) return false;
  const snapshot = await get(ref(db, `users/${user.uid}/favorites/${teacherId}`));
  return snapshot.exists();
};

export const fetchFavorites = async (user: User): Promise<Teacher[]> => {
  if (!user) return [];

  const snapshot = await get(ref(db, `users/${user.uid}/favorites`));
  if (!snapshot.exists()) return [];

  const data = snapshot.val();
  return Object.keys(data).map((key) => ({ id: key, ...data[key] }));
};