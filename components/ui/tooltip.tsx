"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useMobile";

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

const Tooltip = ({
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) => {
  const [open, setOpen] = React.useState(false);
  const isControlled = props.open !== undefined;
  const finalOpen = isControlled ? props.open : open;

  const onOpenChange = (state: boolean) => {
    props.onOpenChange?.(state);
    if (!isControlled) {
      setOpen(state);
    }
  };

  return (
    <TooltipPrimitive.Root
      {...props}
      open={finalOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipContext.Provider
        value={{ open: !!finalOpen, setOpen: onOpenChange }}
      >
        {children}
      </TooltipContext.Provider>
    </TooltipPrimitive.Root>
  );
};

const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ className, onClick, ...props }, ref) => {
  const isMobile = useIsMobile();
  const context = React.useContext(TooltipContext);

  return (
    <TooltipPrimitive.Trigger
      ref={ref}
      className={className}
      onClick={(e) => {
        if (isMobile && context) {
          context.setOpen(!context.open);
        }
        onClick?.(e);
      }}
      {...props}
    />
  );
});
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-lg bg-neutral-900 px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
