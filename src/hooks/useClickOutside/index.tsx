import { RefObject, useEffect, useRef } from "react";

function useClickOutside<T extends HTMLElement = HTMLElement>({
  callback: handle,
}: UseClickOutsideProps): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const callback = (e: MouseEvent) => {
      if (e.target !== ref.current) {
        handle(e);
      }
    };

    window.addEventListener("mousedown", callback);

    return () => window.removeEventListener("mousedown", callback);
  }, [handle]);

  return ref;
}

export default useClickOutside;
