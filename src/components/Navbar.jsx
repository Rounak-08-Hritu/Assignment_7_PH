import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow">
      
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img src={logo} className="w-800" />
        {/* <h1 className="text-xl font-bold text-green-800">KeenKeeper</h1> */}
      </div>

      {/* NAV */}
      <div className="flex gap-6">
        <NavLink to="/" className={({isActive}) => isActive ? "text-green-700 font-semibold" : "text-gray-600"}>
          Home
        </NavLink>
        <NavLink to="/timeline" className={({isActive}) => isActive ? "text-green-700 font-semibold" : "text-gray-600"}>
          Timeline
        </NavLink>
        <NavLink to="/stats" className={({isActive}) => isActive ? "text-green-700 font-semibold" : "text-gray-600"}>
          Stats
        </NavLink>
      </div>

    </div>
  );
}