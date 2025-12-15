import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initialState = []) {
  const [bookmarkedCompanions, setBookmarkedCompanions] = useState<string[]>(
    () => {
      const saved = JSON.parse(localStorage.getItem(key) as string);

      return saved || initialState;
    }
  );

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(bookmarkedCompanions));
    },
    [bookmarkedCompanions, key]
  );

  function bookmarkCompanion(companionId: string) {
    setBookmarkedCompanions((pre) => [...pre, companionId]);
  }
  function unbookmarkCompanion(companionId: string) {
    setBookmarkedCompanions((pre) => pre.filter((pre) => pre !== companionId));
  }

  return { bookmarkedCompanions, bookmarkCompanion, unbookmarkCompanion };
}
