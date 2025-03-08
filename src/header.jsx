// import { useMediaQuery } from "react-responsive";
// import logo from "./";

const HeaderNav = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <nav className="justify-between items-center my-10">
        {/* <img src="" alt="" /> */}
        <ul className="gap-5 flex flex-row text-2xl">
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
      <div className="flex flex-row justify-center bg-white drop-shadow-lg rounded-2xl p-10">
        <div className="w-30 h-30 mx-10">
          <img
            className="object-fit justify-center"
            src="./bio.jpeg"
            alt="Bio photo"
          />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-3xl">Melonsoda Station</h1>
          <small>melonsodastation@gmail.com</small>
          <p className="my-5 text-left">
            ほんちゃんと申します。政策科学部で都市政策について学んでいます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
