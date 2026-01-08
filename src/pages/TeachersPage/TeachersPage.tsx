import FilterBar from "../../components/FilterBar/FilterBar.ts";
import Header from "../../components/Header/Header.ts";
import Teachers from "../../components/Teachers/Teachers.ts";

const TeachersPage = () => {
  return (
    <>
      <Header page="/teachers" />
      <main className="font-roboto leading-[1.17] tracking-[-0.02em] text-[#121417] text-base bg-[#f8f8f8]">
        <FilterBar />
        <Teachers />
      </main>
    </>
  );
};

export default TeachersPage;
