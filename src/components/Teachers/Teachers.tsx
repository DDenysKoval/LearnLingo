import { fetchAllTeachers } from "../../services/teachersService";
import ButtonComp from "../ButtonComp/ButtonComp";
import TeacherItem from "../TeachersItem/TeachersItem";
import { useQuery } from "@tanstack/react-query";
import { useTeacherStore } from "../../libs/stores/teacherStore";
import { type Teacher, type TeachersVariant } from "../../types/teacher";
import { SyncLoader } from "react-spinners";
import { useTeachersFilterStore } from "../../libs/stores/teacherFilterStore";
import { useState } from "react";

interface TeachersProps {
  variant: TeachersVariant;
}

const Teachers = ({ variant }: TeachersProps) => {
  const limit = 4;
  const [visibleCount, setVisibleCount] = useState(limit);

  const { filters } = useTeachersFilterStore();
  const { favorites } = useTeacherStore();

  const { data, isLoading } = useQuery({
    queryKey: ["teachers", variant],
    queryFn: () => {
      if (variant === "favorites") return favorites;
      return fetchAllTeachers();
    },
  });

  const allTeachers: Teacher[] = Array.isArray(data)
    ? data
    : data && "teachers" in data
    ? data.teachers
    : [];

  const teachers = allTeachers.filter(
    (teacher) =>
      teacher.languages.includes(filters.language) &&
      teacher.levels.includes(filters.level) &&
      teacher.price_per_hour <= filters.price
  );

  const visibleTeachers = teachers.slice(0, visibleCount);

  console.log(teachers);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + limit);
  };

  return (
    <>
      {isLoading && (
        <div className="flex justify-center h-screen">
          <SyncLoader size={10} color={"#e0a39a"} />
        </div>
      )}
      <div className="flex flex-col items-center mx-auto px-32 max-w-360 pb-24">
        {!isLoading && visibleTeachers.length === 0 && (
          <p className="text-center text-neutral-500 text-lg mt-12 h-[calc(100vh-410px)]">
            No teachers found 😕
          </p>
        )}
        <ul className="flex flex-col gap-8 mb-18">
          {visibleTeachers.map((teacher: Teacher) => (
            <li key={teacher.id}>
              <TeacherItem teacherData={teacher} />
            </li>
          ))}
        </ul>
        {visibleCount < teachers.length && (
          <ButtonComp
            onClick={handleLoadMore}
            text="Load more"
            type="button"
            width="w-[183px]"
          />
        )}
      </div>
    </>
  );
};

export default Teachers;
