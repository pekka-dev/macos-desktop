type LayoutContextValue = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  getPortalContainer: () => HTMLDivElement;
};

type LayoutProviderProps = {
  children: React.ReactNode;
};
