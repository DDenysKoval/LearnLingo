const FilterBar = () => {
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
        >
          <option value="French">French</option>
          <option value="English">English</option>
          <option value="German">German</option>
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
        >
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
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
        >
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </div>
    </form>
  );
};

export default FilterBar;
