type LayoutContextValue = {
  showSidebar: boolean;
  onShowSidebar: () => void;
  onHideSidebar: () => void;
  getPortalContainer: () => HTMLDivElement;
  addNodeToDock: (node: React.ReactElement, name: string) => void
};

type DockItems = Record<Application["name"], Application["icon"]>