import FilterBar from "../../components/FilterBar/FilterBar";
import Header from "../../components/Header/Header";
import Teachers from "../../components/Teachers/Teachers";

const TeachersPage = () => {
  return (
    <>
      <Header page="/teachers" />
      <main className="font-roboto leading-[1.17] tracking-[-0.02em] text-[#121417] text-base bg-[#f8f8f8]">
        <FilterBar />
        <Teachers variant="all" />
      </main>
    </>
  );
};

export default TeachersPage;
