import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

export function useQuery(param: string) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSubject = searchParams.get(param) || "";

  const [state, setState] = useState();

  useEffect(() => {
    // Incase SearchParams is the same as searchQuery we don't push a new URL to avoid infinite loop
    if (currentSubject === state) return;

    const delayDebounceFn = setTimeout(() => {
      if (state) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: param,
          value: state,
        });

        router.push(newUrl, { scroll: false });
      } else if (pathname === "/companions") {
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: [param],
        });

        router.push(newUrl, { scroll: false });
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [state, currentSubject, pathname, router, searchParams, param]);

  return [state, setState];
}
