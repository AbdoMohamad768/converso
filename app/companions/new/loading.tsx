export default function Loading() {
  return (
    <main className="lg:w-1/3 md:w-2/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col animate-pulse">
        {/* Title Skeleton */}
        <div className="h-9 w-48 bg-muted rounded-lg"></div>

        {/* Form Fields Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-5 w-32 bg-muted rounded"></div>
              <div className="h-10 w-full bg-muted rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Submit Button Skeleton */}
        <div className="h-10 w-full bg-primary/20 rounded-lg mt-4"></div>
      </article>
    </main>
  );
}
