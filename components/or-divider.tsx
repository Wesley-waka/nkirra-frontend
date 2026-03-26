interface OrDividerProps {
  className?: string;
  text?: string;
}

export function OrDivider({ className = "", text = "or" }: OrDividerProps) {
  return (
    <div className={`relative flex items-center justify-center w-full ${className}`}>
      {/* Left line */}
      <div className="absolute left-0 right-0 h-px bg-border" />
      
      {/* OR text with background */}
      <span className="relative bg-background px-4 text-sm font-medium text-muted-foreground">
        {text}
      </span>
    </div>
  );
}

export default OrDivider;
