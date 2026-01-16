import { useTeachersFilterStore } from "../../libs/stores/teacherFilterStore";
import Select, { type SingleValue, type StylesConfig } from "react-select";

type Option = {
  value: string | number;
  label: string;
};

const selectStyles: StylesConfig<Option, false> = {
  control: (base, state) => ({
    ...base,
    minHeight: "48px",
    width: "100%",
    borderRadius: "14px",
    borderColor: state.isFocused ? "#e0a39a" : "transparent",
    backgroundColor: "#ffffff",
    boxShadow: "none",
    paddingLeft: "8px",
    fontSize: "18px",
    fontWeight: "500",
    cursor: "pointer",
    "&:hover": {
      borderColor: "#f0c0b0",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 10px",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#121417",
    maxWidth: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#121417",
    "&:hover": {
      color: "#121417",
    },
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "14px",
    overflow: "hidden",
    border: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: "none",
  }),
  option: (base, state) => ({
    ...base,
    fontSize: "18px",
    fontWeight: "500",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    color: state.isFocused ? "black" : "rgba(18, 20, 23, 0.2)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
};

const FilterBar = () => {
  const { filters, setLanguage, setPrice, setLevel } = useTeachersFilterStore();

  const languageOptions: Option[] = [
    { value: "English", label: "English" },
    { value: "French", label: "French" },
    { value: "German", label: "German" },
    { value: "Spanish", label: "Spanish" },
    { value: "Mandarin Chinese", label: "Mandarin Chinese" },
    { value: "Italian", label: "Italian" },
    { value: "Vietnamese", label: "Vietnamese" },
    { value: "Korean", label: "Korean" },
  ];

  const levelOptions: Option[] = [
    { value: "A1 Beginner", label: "A1 Beginner" },
    { value: "A2 Elementary", label: "A2 Elementary" },
    { value: "B1 Intermediate", label: "B1 Intermediate" },
    { value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate" },
    { value: "C1 Advanced", label: "C1 Advanced" },
    { value: "C2 Proficient", label: "C2 Proficient" },
  ];

  const priceOptions: Option[] = [
    { value: 20, label: "20 $" },
    { value: 25, label: "25 $" },
    { value: 30, label: "30 $" },
    { value: 35, label: "35 $" },
    { value: 40, label: "40 $" },
  ];

  return (
    <form className="mx-auto max-w-360 px-32 flex gap-5 mb-8">
      <div className="flex flex-col gap-2 w-55.25">
        <label
          className="text-[#8a8a89] font-medium text-sm leading-[1.29]"
          htmlFor="languages"
        >
          Languages
        </label>
        <Select
          styles={selectStyles}
          options={languageOptions}
          value={languageOptions.find((opt) => opt.value === filters.language)}
          onChange={(option: SingleValue<Option>) =>
            setLanguage(option?.value as string)
          }
        />
      </div>
      <div className="flex flex-col gap-2 w-49.5">
        <label
          className="text-[#8a8a89] font-medium text-sm leading-[1.29]"
          htmlFor="level"
        >
          Level of knowledge
        </label>
        <Select
          styles={selectStyles}
          options={levelOptions}
          value={levelOptions.find((opt) => opt.value === filters.level)}
          onChange={(option: SingleValue<Option>) =>
            setLevel(option?.value as string)
          }
        />
      </div>
      <div className="flex flex-col gap-2 w-31">
        <label
          className="text-[#8a8a89] font-medium text-sm leading-[1.29]"
          htmlFor="price"
        >
          Price
        </label>
        <Select
          styles={selectStyles}
          options={priceOptions}
          value={priceOptions.find((opt) => opt.value === filters.price)}
          onChange={(option: SingleValue<Option>) =>
            setPrice(option?.value as number)
          }
        />
      </div>
    </form>
  );
};

export default FilterBar;
