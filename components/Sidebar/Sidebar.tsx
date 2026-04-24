import React from "react";
import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ className, ...props }: SidebarProps): React.ReactElement => {
  return (
    <aside className={`${styles.sidebar} ${className}`} {...props}>
      <h2>Sidebar</h2>
    </aside>
  );
};
