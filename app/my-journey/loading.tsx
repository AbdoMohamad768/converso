export default function Loading() {
  return (
    <main className="lg:w-3/4">
      {/* Profile Header Skeleton */}
      <section className="flex justify-between gap-4 max-sm:flex-col items-center animate-pulse">
        <div className="flex gap-4 items-center">
          <div className="w-[110px] h-[110px] bg-muted rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="h-7 w-48 bg-muted rounded-lg"></div>
            <div className="h-4 w-64 bg-muted rounded-lg"></div>
          </div>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="flex gap-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="border border-black rounded-lg p-3 gap-2 flex flex-col h-fit w-32"
            >
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-muted rounded"></div>
                <div className="h-7 w-8 bg-muted rounded"></div>
              </div>
              <div className="h-4 w-24 bg-muted rounded"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Accordion Skeleton */}
      <div className="w-full mt-8 space-y-4 animate-pulse">
        {[1, 2].map((i) => (
          <div key={i} className="border border-black rounded-lg p-4">
            <div className="h-7 w-48 bg-muted rounded-lg mb-4"></div>
            <div className="space-y-3">
              {[1, 2, 3].map((j) => (
                <div
                  key={j}
                  className="flex items-center gap-4 pb-3 border-b border-black/10"
                >
                  <div className="h-16 w-16 bg-muted rounded-lg hidden md:block"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-6 w-64 bg-muted rounded-lg"></div>
                    <div className="h-4 w-80 bg-muted rounded-lg"></div>
                  </div>
                  <div className="h-6 w-16 bg-muted rounded-4xl hidden md:block"></div>
                  <div className="h-6 w-12 bg-muted rounded"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
