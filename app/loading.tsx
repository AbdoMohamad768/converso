export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-primary/20 border-t-transparent rounded-full"></div>
        </div>
        <p className="text-muted-foreground font-medium">Loading...</p>
      </div>
    </div>
  );
}
