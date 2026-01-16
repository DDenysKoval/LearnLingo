import { useQuery } from "@tanstack/react-query";
import FilterBar from "../../components/FilterBar/FilterBar";
import Header from "../../components/Header/Header";
import Teachers from "../../components/Teachers/Teachers";
import { fetchAllTeachers } from "../../services/teachersService";

const TeachersPage = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["teachers"],
    queryFn: () => fetchAllTeachers(),
  });

  return (
    <>
      <Header page="/teachers" />
      <main className="font-roboto leading-[1.17] tracking-[-0.02em] text-[#121417] text-base bg-[#f8f8f8]">
        <FilterBar />
        <Teachers teachersData={data} isLoading={isLoading} />
      </main>
    </>
  );
};

export default TeachersPage;
