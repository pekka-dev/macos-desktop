import { useApp } from "contexts/AppContext";
import { useLayout } from "contexts/LayoutContext";
import useDisclosure from "hooks/useDisclosure";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

type ApplicationProps = Application & {};

const Application: React.FC<ApplicationProps> = ({ element, icon, name }) => {
  const { addNodeToDock } = useLayout();
  const { getApplicationContainer } = useApp();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  useEffect(() => {
    addNodeToDock(
      React.cloneElement(icon, {
        key: name,
        onClick: onToggle, //lets add further logic later make the window focusable on this click if not, etc...
      }),
      name,
    );
  }, []);

  return isOpen ? createPortal(element, getApplicationContainer()) : null;
};

export default Application;
