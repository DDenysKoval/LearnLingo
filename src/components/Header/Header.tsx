import clsx from "clsx";
import { Link, NavLink, type NavLinkProps } from "react-router-dom";

interface HeaderProps {
  page: string;
}

const Header = ({ page }: HeaderProps) => {
  const navLinkClass: NavLinkProps["className"] = ({ isActive }) =>
    `relative ${
      isActive
        ? "text-orange after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-orange"
        : "hover:text-orange"
    }`;

  return (
    <header
      className={clsx(
        " font-roboto leading-[1.17] tracking-[-0.02em] text-[#121417] text-base",
        page !== "/" && "bg-[#f8f8f8]"
      )}
    >
      <nav className="flex flex-row justify-between items-center max-w-360 mx-auto px-32 py-5">
        <Link className="flex flex-row gap-2 items-center" to="/">
          <svg width={28} height={28}>
            <use href="/icons.svg#logo"></use>
          </svg>
          <p>LearnLingo</p>
        </Link>
        <ul className="flex flex-row items-center gap-7">
          <li className="transition duration-500 ease-in-out hover:text-orange ">
            <NavLink className={navLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li className="transition duration-500 ease-in-out hover:text-orange">
            <NavLink className={navLinkClass} to="/teachers">
              Teachers
            </NavLink>
          </li>
          <li className="transition duration-500 ease-in-out hover:text-orange">
            <NavLink className={navLinkClass} to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
        <div className="flex flex-row gap-4 items-center">
          <button className="flex flex-row gap-2 items-center font-bold h-5 cursor-pointer  hover:text-orange transition duration-500 ease-in-out">
            <svg className="fill-none stroke-orange" width={20} height={20}>
              <use href="/icons.svg#login"></use>
            </svg>
            Login
          </button>
          <button className="flex justify-center items-center rounded-xl bg-[#121417] h-12 w-41.5 text-white font-bold cursor-pointer hover:border-orange hover:border hover:drop-shadow-md">
            Registration
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
