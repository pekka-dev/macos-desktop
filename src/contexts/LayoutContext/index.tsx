import { disconnect } from "process";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const LayoutContext = createContext<LayoutContextValue>({
  showSidebar: false,
  setShowSidebar: (_) => _,
  getPortalContainer: () => document.createElement("div"),
});

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
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
        setShowSidebar,
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
