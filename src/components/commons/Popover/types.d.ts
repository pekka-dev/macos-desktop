type PopoverProps = {
  className?: string;
  isOpen: boolean;
  children: React.ReactNode;
  y: number;
  x: number;
  onClose: () => void;
  anchorRef?: React.RefObject<Element>;
  placement?:
    | "top"
    | "topLeft"
    | "topRight"
    | "bottom"
    | "bottomLeft"
    | "bottomRight";
};
