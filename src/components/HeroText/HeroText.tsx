const HeroText = () => {
  const handleClick = () => {};

  return (
    <div className="w-180 h-132.5 px-16 py-24 bg-[#f8f8f8] rounded-[30px]">
      <h1 className="mb-8 text-5xl font-medium">
        Unlock your potential with the best{" "}
        <span className="italic font-normal bg-orange rounded-xl inline-flex h-10 w-51 justify-center items-end">
          language
        </span>{" "}
        tutors
      </h1>
      <p className="mb-16 text-base w-117 leading-[1.38]">
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <button
        className="w-66.75 h-15 bg-orange rounded-xl flex justify-center items-center leading-[1.56] font-bold transition duration-300 ease-in-out hover:bg-[#d87f7f] hover:drop-shadow-md cursor-pointer"
        type="button"
        onClick={handleClick}
      >
        Get started
      </button>
    </div>
  );
};

export default HeroText;
