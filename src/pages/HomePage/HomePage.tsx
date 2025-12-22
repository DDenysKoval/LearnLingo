import css from "./HomePage.module.css";
import HeroImage from "../../components/HeroImage/HeroImage";
import HeroText from "../../components/HeroText/HeroText";
import Statistics from "../../components/Statistics/Statistics";

const HomePage = () => {
  return (
    <main>
      <div className={css.heroWrapper}>
        <HeroText />
        <HeroImage />
      </div>
      <Statistics />
    </main>
  );
};

export default HomePage;
