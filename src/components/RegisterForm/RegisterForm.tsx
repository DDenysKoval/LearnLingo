import { useState } from "react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <h2 className="mb-5 text-[40px] font-medium leading-[1.2]">
        Registration
      </h2>
      <p className="mb-10 leading-[1.38]">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <form className="flex flex-col">
        <label htmlFor="name">
          <input
            className="h-13.5 border border-gray rounded-xl py-4 px-4.5 w-full placeholder:text-neutral-500 outline-orange focus:border-orange mb-4.5"
            name="name"
            type="text"
            placeholder="Name"
          />
        </label>
        <label htmlFor="email">
          <input
            className="h-13.5 border border-gray rounded-xl py-4 px-4.5 w-full placeholder:text-neutral-500 outline-orange focus:border-orange  mb-4.5"
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label className="relative" htmlFor="password">
          <input
            className="h-13.5 border border-gray rounded-xl py-4 px-4.5 w-full placeholder:text-neutral-500 outline-orange focus:border-orange  mb-10"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <button
            className="absolute top-4 right-4.5"
            type="button"
            onClick={handleClick}
            onMouseDown={(e) => e.preventDefault()}
          >
            <svg
              className={`fill-none ${
                showPassword ? "stroke-orange" : " stroke-black"
              }`}
              width={20}
              height={20}
            >
              <use href="/icons.svg#eye"></use>
            </svg>
          </button>
        </label>
        <button
          className="w-full h-15 bg-orange rounded-xl font-bold text-[18px] leading-[1.56] hover:bg-[#d87f7f] hover:drop-shadow-md cursor-pointer transition duration-300 ease-in-out"
          type="submit"
        >
          Sigh Up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
