interface IframePlaceholderProps {
  title: string;
  description?: string;
}

export function IframePlaceholder({ title, description }: IframePlaceholderProps) {
  return (
    <div className="rounded-lg border-2 border-dashed border-muted-foreground/30 bg-secondary/50 p-8 md:p-12 text-center">
      <p className="text-muted-foreground font-medium">{title}</p>
      {description && (
        <p className="text-sm text-muted-foreground/70 mt-2">{description}</p>
      )}
    </div>
  );
}
