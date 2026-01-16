// import { fetchAllTeachers } from "../../services/teachersService";
import ButtonComp from "../ButtonComp/ButtonComp";
import TeacherItem from "../TeachersItem/TeachersItem";
// import { useQuery } from "@tanstack/react-query";
import { type Teacher } from "../../types/teacher";
import { SyncLoader } from "react-spinners";
import { useTeachersFilterStore } from "../../libs/stores/teacherFilterStore";
import { useState } from "react";
// import { fetchFavorites } from "../../firebase/favorite";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase/firebase";

interface TeachersProps {
  teachersData: Teacher[];
  isLoading: boolean;
}

const Teachers = ({ teachersData, isLoading }: TeachersProps) => {
  const limit = 4;
  const [visibleCount, setVisibleCount] = useState(limit);
  const { filters } = useTeachersFilterStore();

  const allTeachers: Teacher[] = teachersData ?? [];
  const filteredTeachers = allTeachers.filter((teacher) => {
    const matchLanguage =
      !filters.language || (teacher.languages ?? []).includes(filters.language);

    const matchLevel =
      !filters.level || (teacher.levels ?? []).includes(filters.level);

    const matchPrice =
      !filters.price || teacher.price_per_hour <= filters.price;

    return matchLanguage && matchLevel && matchPrice;
  });
  const visibleTeachers = filteredTeachers.slice(0, visibleCount);

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
        {visibleCount < filteredTeachers.length && (
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
