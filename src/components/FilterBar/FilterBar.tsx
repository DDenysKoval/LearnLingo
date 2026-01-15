import { useTeachersFilterStore } from "../../libs/stores/teacherFilterStore";

const FilterBar = () => {
  const { filters, setLanguage, setPrice, setLevel } = useTeachersFilterStore();

  const handleLanguages = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };
  const handleLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value);
  };
  const handlePrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrice(Number(e.target.value));
  };

  return (
    <form className="mx-auto max-w-360 px-32 flex gap-5 mb-8">
      <div className="flex flex-col gap-2">
        <label
          className="text-[#8a8a89] font-medium text-sm leading-[1.29]"
          htmlFor="languages"
        >
          Languages
        </label>
        <select
          className="bg-white rounded-[14px] h-12 w-55.25 pl-4.5
          placeholder:text-[#121417]"
          name="languages"
          value={filters.language}
          onChange={handleLanguages}
        >
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Spanish">Spanish</option>
          <option value="Mandarin Chinese">Mandarin Chinese</option>
          <option value="Italian">Italian</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Korean">Korean</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="text-[#8a8a89] font-medium text-sm leading-[1.29]"
          htmlFor="level"
        >
          Level of knowledge
        </label>
        <select
          className="bg-white rounded-[14px] h-12 w-55.25 pl-4.5
          placeholder:text-[#121417]"
          name="level"
          value={filters.level}
          onChange={handleLevel}
        >
          <option value="A1 Beginner">A1 Beginner</option>
          <option value="A2 Elementary">A2 Elementary</option>
          <option value="B1 Intermediate">B1 Intermediate</option>
          <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
          <option value="C1 Advanced">C1 Advanced</option>
          <option value="C2 Proficient">C2 Proficient</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="text-[#8a8a89] font-medium text-sm leading-[1.29]"
          htmlFor="price"
        >
          Price
        </label>
        <select
          className="bg-white rounded-[14px] h-12 w-31 pl-4.5
          placeholder:text-[#121417]"
          name="price"
          value={filters.price}
          onChange={handlePrice}
        >
          <option value="20">20 $</option>
          <option value="25">25 $</option>
          <option value="30">30 $</option>
          <option value="35">35 $</option>
          <option value="40">40 $</option>
        </select>
      </div>
    </form>
  );
};

export default FilterBar;
