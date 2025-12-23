import FilterBar from "../../components/FilterBAr/FilterBar";
import Header from "../../components/Header/Header";

const TeachersPage = () => {
  return (
    <body className="font-roboto leading-[1.17] tracking-[-0.02em] text-[#121417] text-base bg-[#f8f8f8]">
      <Header />
      <main>
        <FilterBar />
      </main>
    </body>
  );
};

export default TeachersPage;
