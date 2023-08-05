import clsx from "clsx";
import Dock from "components/Dock";
import Sidebar from "components/Sidebar";
import { createDivAndAppend } from "helpers";
import useDisclosure from "hooks/useDisclosure";
import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

const PORTAL_CONTAINER = "portal-container";

const LayoutContext = createContext<LayoutContextValue>({
  showSidebar: false,
  onShowSidebar: () => {},
  onHideSidebar: () => {},
  getPortalContainer: () => {
    const container = document.createElement("div");
    container.className = PORTAL_CONTAINER;
    return container;
  },
  addNodeToDock: (node: React.ReactNode, name: string) => {},
});

const LayoutProvider: React.FC<ChildrenProp> = ({ children }) => {
  const {
    isOpen: showSidebar,
    onOpen: onShowSidebar,
    onClose: onHideSidebar,
  } = useDisclosure(false);
  const portalContainerRef = useRef<HTMLDivElement>(null);
  const dockContainerRef = useRef<HTMLDivElement>(null);
  const [dockNodes, setDockNodes] = useState<DockItems>({});

  const getPortalContainer = (): HTMLDivElement => {
    if (portalContainerRef.current) return portalContainerRef.current;
    document
      .querySelectorAll(`.${PORTAL_CONTAINER}`)
      .forEach((e) => e.remove());
    return createDivAndAppend(PORTAL_CONTAINER);
  };

  const addNodeToDock = useCallback((element: React.ReactElement, name: string) => {
    setDockNodes((prev) => ({ ...prev, [name]: element }));
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        showSidebar,
        onShowSidebar,
        onHideSidebar,
        getPortalContainer,
        addNodeToDock,
      }}
    >
      <main className={clsx("Main", showSidebar && "MainAsideVisible")}>
        {children}
        <Dock ref={dockContainerRef}>
          {Object.keys(dockNodes).map((appName) => dockNodes[appName])}
        </Dock>
      </main>
      <Sidebar />
      <div ref={portalContainerRef} className={clsx(PORTAL_CONTAINER)} />
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;

export const useLayout = () => useContext(LayoutContext);
