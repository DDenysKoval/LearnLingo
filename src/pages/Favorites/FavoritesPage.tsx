import FilterBar from "../../components/FilterBar/FilterBar.tsx";
import Header from "../../components/Header/Header.tsx";
import Teachers from "../../components/Teachers/Teachers.tsx";

const FavoritesPage = () => {
  return (
    <>
      <Header page="/favorites" />
      <main className="font-roboto leading-[1.17] tracking-[-0.02em] text-[#121417] text-base bg-[#f8f8f8] h-[100%]">
        <FilterBar />
        <Teachers variant="favorites" />
      </main>
    </>
  );
};

export default FavoritesPage;
