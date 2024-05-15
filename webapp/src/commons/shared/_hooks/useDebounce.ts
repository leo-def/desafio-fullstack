import { useRef } from "react";

export function useDebounce(): (func: Function, timeout: number) => void {
  const debounceSeed = useRef(null as NodeJS.Timeout | null);
  const debounceFunction = useRef((func: Function, timeout = 200) => {
    if (debounceSeed.current) {
      clearTimeout(debounceSeed.current);
      debounceSeed.current = null;
    }
    debounceSeed.current = setTimeout(() => {
      func();
    }, timeout);
  });
  return debounceFunction.current;
}
