import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  // get pathname to add proper styling to a tab when selected
  const { pathname } = useLocation();

  return (
    <aside className="bg-blue-900 md:w-52">
      <ul className="flex md:flex-col md:mt-16 text-white ">
        <Link to="/">
          <li
            className={`p-2 cursor-pointer duration-150 hover:opacity-50 ${
              pathname === "/" ? "bg-blue-500" : ""
            }`}
          >
            Contacts
          </li>
        </Link>
        <Link to="/maps">
          <li
            className={`p-2 cursor-pointer duration-150 hover:opacity-50 ${
              pathname === "/maps" ? "bg-blue-500" : ""
            }`}
          >
            Charts and Maps
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default SideBar;
