import React, { AnimationEventHandler, TransitionEventHandler, useEffect } from "react";
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
  const { getPortalContainer } = useLayout();
  const popoverRef = useClickOutside<HTMLDivElement>({
    callback: (e) => {
      onClose();
    },
  });

  useEffect(() => {
    if (!popoverRef.current) return;

    popoverRef.current.style.setProperty("--x", `${x}px`);
    popoverRef.current.style.setProperty("--y", `${y}px`);
  }, [popoverRef, x, y]);

  const handleTransitionEnd: TransitionEventHandler = (event) => {
    if (popoverRef.current)
      popoverRef.current.classList.add(styles.popoverHide);
    onClose();
  };
  return createPortal(
    <div
      ref={popoverRef}
      className={clsx(
        styles.popover,
        isOpen && styles.popoverActive,
      )}
      onTransitionEnd={handleTransitionEnd}
    >
      {children}
    </div>,
    getPortalContainer(),
  );
};

export default Popover;
