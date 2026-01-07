import axios from "axios";
import getEnvVar from "../utils/getEnvVar";
import type { Teacher } from "../types/teacher";

const BASE_URL = getEnvVar("VITE_API_URL")

export const fetchAllTeachers = async (page = 1, limit = 4) => {
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

  const start = (page - 1) * limit;
  const end = page * limit;

  return {
    teachers: teachers.slice(start, end),
  };
};