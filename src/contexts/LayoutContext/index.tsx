import useDisclosure from "hooks/useDisclosure";
import React, {
    createContext,
    useContext,
    useState
} from "react";

const LayoutContext = createContext<LayoutContextValue>({
  showSidebar: false,
  onShowSidebar: () => {},
  onHideSidebar: () => {},
  getPortalContainer: () => document.createElement("div"),
});

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const {
    isOpen: showSidebar,
    onOpen: onShowSidebar,
    onClose: onHideSidebar,
  } = useDisclosure(false);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(
    null,
  );

  const getPortalContainer = (): HTMLDivElement => {
    if (portalContainer) return portalContainer;
    document.querySelector(".portal-container")?.remove();
    const newPortalContainer = document.createElement("div");
    newPortalContainer.className = "portal-container";
    document.getElementById("root")?.appendChild(newPortalContainer);
    return newPortalContainer;
  };

  return (
    <LayoutContext.Provider
      value={{
        showSidebar,
        onShowSidebar,
        onHideSidebar,
        getPortalContainer,
      }}
    >
      <div
        ref={(ref) => {
          setPortalContainer(ref);
        }}
        className="portal-container"
      />
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;

export const useLayout = () => useContext(LayoutContext);
