import React, { createContext, useContext, useRef, useState } from "react";

const LayoutContext = createContext<LayoutContextValue>({
  showSidebar: false,
  setShowSidebar: (_) => _,
  portalContainer: null,
});

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const portalContainerRef = useRef<HTMLDivElement>(null);

  return (
    <LayoutContext.Provider value={{
      showSidebar,
      setShowSidebar,
      portalContainer: portalContainerRef.current,
    }}>
      <div ref={portalContainerRef} className="portal-container" />
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;

export const useLayout = () => useContext(LayoutContext);
