import Header from "../../components/Header/Header";
import HeroImage from "../../components/HeroImage/HeroImage";
import HeroText from "../../components/HeroText/HeroText";
import Statistics from "../../components/Statistics/Statistics";

const HomePage = () => {
  return (
    <body className="font-roboto leading-[1.17] tracking-[-0.02em] text-[#121417] text-base">
      <Header />
      <main>
        <div className="container">
          <div className="flex flex-row gap-6 mb-6">
            <HeroText />
            <HeroImage />
          </div>
          <Statistics />
        </div>
      </main>
    </body>
  );
};

export default HomePage;
