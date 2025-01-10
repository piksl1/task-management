import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const Sidebar: React.FC = () => {
  return (
    <nav className="h-screen w-64 bg-gray-800 text-white p-4">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-blue-400" : "")}
      >
        <SidebarItem>Home</SidebarItem>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "text-blue-400" : "")}
      >
        <SidebarItem>About</SidebarItem>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "text-blue-400" : "")}
      >
        <SidebarItem>Contact</SidebarItem>
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? "text-blue-400" : "")}
      >
        <SidebarItem>Register</SidebarItem>
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "text-blue-400" : "")}
      >
        <SidebarItem>Login</SidebarItem>
      </NavLink>
      <NavLink
        to="/logout"
        className={({ isActive }) => (isActive ? "text-blue-400" : "")}
      >
        <SidebarItem>Logout</SidebarItem>
      </NavLink>
    </nav>
  );
};

export default Sidebar;
