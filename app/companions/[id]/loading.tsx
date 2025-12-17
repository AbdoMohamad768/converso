export default function Loading() {
  return (
    <main>
      {/* Companion Header Skeleton */}
      <article className="flex rounded-border justify-between p-6 max-md:flex-col animate-pulse">
        <div className="flex items-center gap-2">
          <div className="size-[72px] bg-muted rounded-lg max-md:hidden"></div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-7 w-48 bg-muted rounded-lg"></div>
              <div className="h-6 w-20 bg-muted rounded-4xl max-md:hidden"></div>
            </div>
            <div className="h-5 w-64 bg-muted rounded-lg"></div>
          </div>
        </div>
        <div className="h-7 w-20 bg-muted rounded-lg max-md:hidden"></div>
      </article>

      {/* Companion Session Component Skeleton */}
      <div className="mt-8 animate-pulse">
        <div className="flex gap-4 max-sm:flex-col">
          {/* Companion Section */}
          <div className="companion-section">
            <div className="companion-avatar bg-muted"></div>
            <div className="space-y-2 mt-4">
              <div className="h-6 w-48 bg-muted rounded-lg mx-auto"></div>
              <div className="h-4 w-64 bg-muted rounded-lg mx-auto"></div>
            </div>
          </div>

          {/* User Section */}
          <div className="user-section">
            <div className="user-avatar">
              <div className="w-24 h-24 bg-muted rounded-full"></div>
              <div className="h-5 w-32 bg-muted rounded-lg"></div>
            </div>
            <div className="btn-mic">
              <div className="w-12 h-12 bg-muted rounded-lg"></div>
              <div className="h-4 w-20 bg-muted rounded"></div>
            </div>
          </div>
        </div>

        {/* Transcript Section */}
        <div className="transcript">
          <div className="transcript-message space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-6 w-32 bg-muted rounded-lg"></div>
                <div className="h-20 w-full bg-muted/50 rounded-lg"></div>
              </div>
            ))}
          </div>
          <div className="transcript-fade"></div>
        </div>
      </div>
    </main>
  );
}
