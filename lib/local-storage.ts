
export const localStorageUtils = {
    get<T>(key: string, fallback: T): T {
      try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : (JSON.parse(value) as T);
      } catch {
        return fallback;
      }
    },
  
    set<T>(key: string, value: T): boolean {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch {
        return false;
      }
    },
  
    remove(key: string): boolean {
      try {
        localStorage.removeItem(key);
        return true;
      } catch {
        return false;
      }
    },
  
    clear(): boolean {
      try {
        localStorage.clear();
        return true;
      } catch {
        return false;
      }
    },
  };
  