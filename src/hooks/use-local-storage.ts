
"use client";

import { localStorageUtils } from "@/lib/local-storage";
import { useCallback, useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setValue(localStorageUtils.get(key, initialValue));
    setIsLoaded(true);
  }, [key]);

  const updateValue = useCallback(
    (nextValue: T | ((currentValue: T) => T)) => {
      setValue((currentValue) => {
        const updatedValue =
          typeof nextValue === "function"
            ? (nextValue as (currentValue: T) => T)(currentValue)
            : nextValue;

        localStorageUtils.set(key, updatedValue);
        return updatedValue;
      });
    },
    [key],
  );

  const removeValue = useCallback(() => {
    localStorageUtils.remove(key);
    setValue(initialValue);
  }, [key, initialValue]);

  return { value, setValue: updateValue, removeValue, isLoaded };
}
