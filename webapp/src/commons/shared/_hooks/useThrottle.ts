import React, { useRef } from "react";

export function useThrottle(): (func: Function, delay: number) => void {
  const throttleSeed = useRef(null as NodeJS.Timeout | null);

  const throttleFunction = useRef((func: Function, delay = 200) => {
    if (!throttleSeed.current) {
      func();
      throttleSeed.current = setTimeout(() => {
        throttleSeed.current = null;
      }, delay);
    }
  });

  return throttleFunction.current;
}
