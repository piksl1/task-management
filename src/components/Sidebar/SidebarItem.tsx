import React from "react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => (
  <li>
    <a className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-secondary-color rounded-lg p-2 transition-all duration-200 hover:pl-4">
      {icon}
      <span>{label}</span>
    </a>
  </li>
);

export default SidebarItem;
