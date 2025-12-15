"use client";

import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { getSubjectColor } from "@/lib/utils";
import CompanionCard from "./CompanionCard";

interface CompanionGridProps {
  companions: Companion[];
}

function CompanionGrid({ companions }: CompanionGridProps) {
  const { bookmarkedCompanions, bookmarkCompanion, unbookmarkCompanion } =
    useLocalStorage("bookmarked", []);

  function handleBookmarks(id: string) {
    if (bookmarkedCompanions.includes(id)) unbookmarkCompanion(id);
    else bookmarkCompanion(id);
  }

  return (
    <>
      {companions.map((companion) => (
        <CompanionCard
          color={getSubjectColor(companion.subject)}
          key={companion.id}
          {...companion}
          bookmarks={bookmarkedCompanions}
          handleBookmark={handleBookmarks}
        />
      ))}
    </>
  );
}

export default CompanionGrid;
