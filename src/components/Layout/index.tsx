import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { useLayout } from "contexts/LayoutContext";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { showSidebar } = useLayout();

  return (
    <main className={clsx(styles.main, showSidebar && styles.mainAsideVisible)}>
      {children}
    </main>
  );
};

export default Layout;
