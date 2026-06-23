export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-primary text-primary-foreground text-[11px] font-bold">
            IB
          </span>
          <span className="font-mono">
            ishfaq24.dev · © {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs">
          <span>Designed & engineered in India</span>
          <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 md:inline-block" />
          <span>v1.0</span>
        </div>
      </div>
    </footer>
  );
}
