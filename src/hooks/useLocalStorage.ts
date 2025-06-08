import { useState, useEffect } from 'react';
import superjson from 'superjson';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        return superjson.parse(stored) as T;
      } catch {
        return initialValue;
      }
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, superjson.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;