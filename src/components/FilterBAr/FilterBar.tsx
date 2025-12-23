const FilterBar = () => {
  return (
    <div className="mx-auto max-w-360 px-32 flex g-5">
      <div className="flex flex-col g-2git ">
        <label htmlFor="languages">Languages</label>
        <input type="text" name="languages" />
      </div>
      <div>
        <label htmlFor="level">Level of knowledge</label>
        <input type="text" name="level" />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input type="text" name="price" />
      </div>
    </div>
  );
};

export default FilterBar;
