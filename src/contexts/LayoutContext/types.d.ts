type LayoutContextValue = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  portalContainer: HTMLDivElement | null;
};

type LayoutProviderProps = {
  children: React.ReactNode;
};
