export function ConnectingLine() {
    return (
      <div className="relative h-24 w-full overflow-hidden">
        <div className="absolute left-1/2 h-full w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-primary/20 bg-background" />
      </div>
    );
  }