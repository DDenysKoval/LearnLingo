import { useQuery } from "@tanstack/react-query";
import FilterBar from "../../components/FilterBar/FilterBar.tsx";
import Header from "../../components/Header/Header.tsx";
import Teachers from "../../components/Teachers/Teachers.tsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { fetchFavorites } from "../../firebase/favorite.ts";

const FavoritesPage = () => {
  const [user] = useAuthState(auth);

  const { data = [], isLoading } = useQuery({
    queryKey: ["favorites", user?.uid],
    queryFn: () => fetchFavorites(user!),
    enabled: !!user,
  });

  return (
    <>
      <Header page="/favorites" />
      <main className="h-screen font-roboto leading-[1.17] tracking-[-0.02em] text-[#121417] text-base bg-[#f8f8f8]">
        <FilterBar />
        <div className="flex-1 bg-[#f8f8f8]">
          <Teachers teachersData={data} isLoading={isLoading} />
        </div>
      </main>
    </>
  );
};

export default FavoritesPage;
