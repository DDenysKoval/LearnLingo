import { fetchAllTeachers } from "../../services/teachersService";
import type { Teacher } from "../../types/teacher";
import TeacherItem from "../TeachersItem/TeachersItem";
import { useInfiniteQuery } from "@tanstack/react-query";

const Teachers = () => {
  const limit = 4;

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["teachers"],
      queryFn: ({ pageParam = 1 }) => fetchAllTeachers(pageParam, limit),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) =>
        lastPage.teachers.length < limit ? undefined : allPages.length + 1,
    });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <ul className="flex flex-col gap-8">
        {data?.pages.map((page) =>
          page.teachers.map((teacher: Teacher) => (
            <li key={teacher.id}>
              <TeacherItem teacherData={teacher} />
            </li>
          ))
        )}
      </ul>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
};

export default Teachers;
