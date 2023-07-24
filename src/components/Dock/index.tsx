import { useLayout } from "contexts/LayoutContext";
import useDisclosure from "hooks/useDisclosure";
import React, { MouseEventHandler, useEffect, useState } from "react";
import Popover from "../commons/Popover";
import styles from "./styles.module.css";

const Dock: React.FC = () => {
  const { onShowSidebar } = useLayout();
  const { isOpen, onClose, onOpen } = useDisclosure(false);
  const [popoverX, setPopoverX] = useState(0);
  const [popoverY, setPopoverY] = useState(0);

  const handleContextMenu: MouseEventHandler<HTMLElement> = (event) => {
    event.preventDefault();
    const boundingClientRect = event.currentTarget.getBoundingClientRect();
    const mScreenHeight = window.innerHeight;
    console.log(event);

    setPopoverY(mScreenHeight - boundingClientRect.y);
    setPopoverX(event.pageX > event.screenX ? event.screenX : event.pageX);
    onOpen();
  };

  useEffect(() => {
    console.log({ popoverX, popoverY });
  }, [popoverX, popoverY]);

  return (
    <>
      <section
        className={styles.dock}
        onContextMenu={handleContextMenu}
      ></section>
      <Popover isOpen={isOpen} y={popoverY} x={popoverX} onClose={onClose}>
        <div className={styles.dockPopoverMenu}>
          <span className={styles.dockPopoverMenuItem} onClick={onShowSidebar}>
            Dock settings...
          </span>
        </div>
      </Popover>
    </>
  );
};

export default Dock;
