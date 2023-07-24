import React from "react";
import { useLayout } from "contexts/LayoutContext";
import clsx from "clsx";
import styles from "./styles.module.css";
import useClickOutside from "hooks/useClickOutside";

const Sidebar: React.FC = () => {
  const { showSidebar, onHideSidebar } = useLayout();
  const ref = useClickOutside({
    callback: (e) => {
      if (!showSidebar) return;
      e.stopPropagation();
      onHideSidebar();
    },
  });

  return (
    <aside
      ref={ref}
      className={clsx(styles.aside, showSidebar && styles.asideVisible)}
    ></aside>
  );
};

export default Sidebar;
