import clsx from "clsx";
import { useLayout } from "contexts/LayoutContext";
import React from "react";
import styles from "./styles.module.css";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { showSidebar } = useLayout();

  return (
    <main className={clsx(styles.main, showSidebar && styles.mainAsideVisible)}>
      {children}
    </main>
  );
};

export default Layout;
