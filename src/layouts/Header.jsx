// import { useMediaQuery } from "react-responsive";
// import logo from "./";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <nav className="justify-between items-center my-10">
        <ul className="gap-5 flex flex-row text-2xl text-black  rounded-2xl border-1 px-10 py-3">
          <a href="">
            <li className="hover:text-bold">Home</li>
          </a>
          <a href="">
            <li className="hover:text-bold">About</li>
          </a>
          <a href="">
            <li className="hover:text-bold">Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
