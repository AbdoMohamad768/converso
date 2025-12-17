export default function Loading() {
  return (
    <main>
      {/* Header with Search and Filter Skeleton */}
      <section className="flex justify-between gap-4 max-sm:flex-col animate-pulse">
        <div className="h-9 w-64 bg-muted rounded-lg"></div>
        <div className="flex gap-4 items-center">
          <div className="h-9 w-48 bg-muted rounded-lg"></div>
          <div className="h-9 w-32 bg-muted rounded-lg"></div>
        </div>
      </section>

      {/* Companions Grid Skeleton */}
      <section className="companions-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="companion-card animate-pulse"
            style={{
              backgroundColor:
                i % 3 === 1 ? "#E5D0FF" : i % 3 === 2 ? "#FFDA6E" : "#BDE7FF",
            }}
          >
            <div className="flex justify-between items-center">
              <div className="h-6 w-20 bg-black/20 rounded-4xl"></div>
              <div className="h-8 w-8 bg-black/20 rounded-4xl"></div>
            </div>

            <div className="space-y-2">
              <div className="h-7 w-48 bg-black/10 rounded-lg"></div>
              <div className="h-4 w-64 bg-black/10 rounded-lg"></div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-4 w-4 bg-black/10 rounded"></div>
              <div className="h-4 w-24 bg-black/10 rounded"></div>
            </div>

            <div className="h-10 w-full bg-black/10 rounded-xl"></div>
          </div>
        ))}
      </section>
    </main>
  );
}
