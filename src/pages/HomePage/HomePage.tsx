import Header from "../../components/Header/Header.tsx";
import HeroImage from "../../components/HeroImage/HeroImage.tsx";
import HeroText from "../../components/HeroText/HeroText.tsx";
import Statistics from "../../components/Statistics/Statistics.tsx";

const HomePage = () => {
  return (
    <>
      <Header page={"/"} />
      <main className="font-roboto leading-[1.17] tracking-[-0.02em] text-[#121417] text-base">
        <div className="container">
          <div className="flex flex-row gap-6 mb-6">
            <HeroText />
            <HeroImage />
          </div>
          <Statistics />
        </div>
      </main>
    </>
  );
};

export default HomePage;
