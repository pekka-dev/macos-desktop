import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import useClickOutside from "hooks/useClickOutside";
import styles from "./styles.module.css";
import { useLayout } from "contexts/LayoutContext";

const Popover: React.FC<PopoverProps> = ({
  children,
  isOpen,
  onClose,
  anchorRef,
  y,
  x,
  placement = "top",
}) => {
  const { portalContainer } = useLayout();
  const popoverRef = useClickOutside<HTMLDivElement>({
    callback: (e) => {
      onClose();

      // if (!popoverRef.current || !isOpen) return;
      // popoverRef.current.remove();
    },
  });

  useEffect(() => {
    if (!popoverRef.current) return;

    popoverRef.current.style.setProperty("--x", `${x}px`);
    popoverRef.current.style.setProperty("--y", `${y}px`);
  }, [popoverRef, x, y]);

  if (!portalContainer) {
    console.error("Cannot show popover, portalContainer is null");
    return <></>;
  }

  return createPortal(
    <div
      ref={popoverRef}
      className={clsx(styles.popover, isOpen && styles.popoverActive)}
    >
      {children}
    </div>,
    portalContainer,
  );
};

export default Popover;
