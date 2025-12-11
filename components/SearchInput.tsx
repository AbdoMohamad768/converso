"use client";

import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function SearchInput() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTopic = searchParams.get("topic") || "";

  const [searchQuery, setSearchQuery] = useState(currentTopic);

  useEffect(() => {
    // Incase SearchParams is the same as searchQuery we don't push a new URL to avoid infinite loop
    if (currentTopic === searchQuery) return;

    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "topic",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
      } else {
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["topic"],
        });

        router.push(newUrl, { scroll: false });
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, currentTopic, pathname, router, searchParams]);

  // Alternative Approach (AI Generated)
  // const pathname = usePathname();
  // const router = useRouter();
  // const searchParams = useSearchParams();

  // // Get current topic from URL to initialize state
  // const currentTopic = searchParams.get("topic") || "";

  // const [searchQuery, setSearchQuery] = useState(currentTopic);

  // // Track the last value we pushed to URL to prevent unnecessary updates
  // const lastPushedQuery = useRef<string | null>(currentTopic || null);
  // // Track if we're currently updating from user input (to avoid syncing during debounce)
  // const isUserTyping = useRef(false);

  // // Sync input with URL when it changes externally (browser back/forward, direct navigation)
  // // Only sync if the change didn't come from our own push
  // useEffect(() => {
  //   // If currentTopic matches what we last pushed, it's from us - don't sync
  //   if (currentTopic === lastPushedQuery.current) {
  //     return;
  //   }

  //   // If user is currently typing (debounce active), don't sync
  //   if (isUserTyping.current) {
  //     return;
  //   }

  //   // URL changed externally, sync the input
  //   if (currentTopic !== searchQuery) {
  //     setSearchQuery(currentTopic);
  //     lastPushedQuery.current = currentTopic || null;
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentTopic]);

  // // Debounced URL update - only depends on searchQuery and pathname
  // // We read searchParams inside the effect but don't include it in dependencies
  // // to prevent cascading renders (searchParams object reference changes on every render)
  // useEffect(() => {
  //   isUserTyping.current = true;

  //   const delayDebounceFn = setTimeout(() => {
  //     isUserTyping.current = false;

  //     // Read current search params inside the effect (safe to read, just not use as dependency)
  //     const currentTopicInUrl = searchParams.get("topic") || "";
  //     const currentParamsString = searchParams.toString();

  //     if (searchQuery) {
  //       // Only update if the URL doesn't already match what we want to push
  //       if (currentTopicInUrl !== searchQuery) {
  //         const newUrl = formUrlQuery({
  //           params: currentParamsString,
  //           key: "topic",
  //           value: searchQuery,
  //         });

  //         lastPushedQuery.current = searchQuery;
  //         router.push(newUrl, { scroll: false });
  //       } else {
  //         // URL already matches, update ref to prevent unnecessary pushes
  //         lastPushedQuery.current = searchQuery;
  //       }
  //     } else if (pathname === "/companions" && currentTopicInUrl) {
  //       // Only remove if topic param exists
  //       const newUrl = removeKeysFromUrlQuery({
  //         params: currentParamsString,
  //         keysToRemove: ["topic"],
  //       });

  //       lastPushedQuery.current = null;
  //       router.push(newUrl, { scroll: false });
  //     }
  //   }, 500);

  //   return () => {
  //     clearTimeout(delayDebounceFn);
  //     // Reset typing flag if component unmounts or effect re-runs before timeout
  //     isUserTyping.current = false;
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchQuery, pathname, router]);

  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
      <Image src="/icons/search.svg" alt="Search" width={15} height={15} />

      <input
        type="text"
        placeholder="Search companions ..."
        className="outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
