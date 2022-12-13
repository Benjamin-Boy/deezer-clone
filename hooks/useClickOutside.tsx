import { useEffect, useRef } from "react";

const useClickOutside = (handler: Function) => {
  let domeNode =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    let maybeHandler = (e: MouseEvent) => {
      if (!domeNode.current.contains(e.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => document.removeEventListener("mousedown", maybeHandler);
  });

  return domeNode;
};

export default useClickOutside;
