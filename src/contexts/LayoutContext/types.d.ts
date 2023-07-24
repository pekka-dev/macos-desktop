type LayoutContextValue = {
  showSidebar: boolean;
  onShowSidebar: () => void;
  onHideSidebar: () => void;
  getPortalContainer: () => HTMLDivElement;
};

type LayoutProviderProps = {
  children: React.ReactNode;
};
