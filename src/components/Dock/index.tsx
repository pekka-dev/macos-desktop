import React, { MouseEventHandler, useState } from "react";
import styles from "./styles.module.css";
import Popover from "../commons/Popover";
import useDisclosure from "../../hooks/useDisclosure";

const Dock: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure(false);
  const [popoverX, setPopoverX] = useState(0);
  const [popoverY, setPopoverY] = useState(0);

  const handleContextMenu: MouseEventHandler<HTMLElement> = (event) => {
    event.preventDefault();
    const boundingClientRect = event.currentTarget.getBoundingClientRect();
    const mScreenHeight = window.innerHeight;
    setPopoverY(mScreenHeight - boundingClientRect.y);
    setPopoverX(event.screenX);
    onOpen();
  };

  return (
    <>
      <section
        className={styles.dock}
        onContextMenu={handleContextMenu}
      ></section>
      <Popover isOpen={isOpen} y={popoverY} x={popoverX} onClose={onClose}>
        THis is popover
      </Popover>
    </>
  );
};

export default Dock;
