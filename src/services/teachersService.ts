import axios from "axios";
import getEnvVar from "../utils/getEnvVar.ts";
import type { Teacher } from "../types/teacher.ts";

const BASE_URL = getEnvVar("VITE_API_URL")

export const fetchAllTeachers = async () => {
  const response = await axios.get(
    `${BASE_URL}/teachers.json`
  );

  const data = response.data;

  if (!data) {
    return { teachers: [] };
  }

  const teachers = Object.entries(data).map(([id, teacher]) => ({
    id,
    ...(teacher as Omit<Teacher, "id">),
  }));

  return teachers;
};