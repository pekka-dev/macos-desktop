import clsx from "clsx";
import { useLayout } from "contexts/LayoutContext";
import useClickOutside from "hooks/useClickOutside";
import React, { TransitionEventHandler, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.scss";

const Popover: React.FC<PopoverProps> = ({
  className,
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

    console.log({ x, y });

    popoverRef.current.style.setProperty("--x", `${x}px`);
    popoverRef.current.style.setProperty("--y", `${y}px`);
  }, [popoverRef, x, y]);

  const handleTransitionEnd: TransitionEventHandler = (event) => {
    if (popoverRef.current) {
      popoverRef.current.classList.add(styles.popoverHide);
    }
    onClose();
  };
  return createPortal(
    <div
      ref={popoverRef}
      className={clsx(styles.popover, isOpen && styles.popoverActive)}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={styles.popoverArrow}>
        <div className={styles.popoverArrowLeft} />
        <div className={styles.popoverArrowRight} />
      </div>
      <div className={clsx(className, styles.popoverContent)}>{children}</div>
    </div>,
    getPortalContainer(),
  );
};

export default Popover;
