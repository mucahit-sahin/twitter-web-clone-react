import React from "react";
import "./SidebarItem.css";

function SidebarItem({ Icon, text, active }) {
  return (
    <div className={`sidebarItem ${active && "sidebarItem--active"}`}>
      <Icon className="sidebaricon" active={active && true} />
      <span>{text}</span>
    </div>
  );
}

export default SidebarItem;
