import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";

export default function None({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1 className={cn("text-muted-foreground flex items-center gap-1.5", className)}>
      <TriangleAlert className="size-4"/>
      {children}
    </h1>
  );
}
