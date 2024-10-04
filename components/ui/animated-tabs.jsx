"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Children, cloneElement, useEffect, useState, useId } from "react";

export default function AnimatedBackground({
  children,
  defaultValue = [], // Accept an array of default values
  onValueChange,
  className,
  transition,
  enableHover = false,
}) {
  const [activeIds, setActiveIds] = useState(defaultValue);
  const uniqueId = useId();

  const handleToggleActiveId = (id) => {
    setActiveIds((prevActiveIds) => {
      if (prevActiveIds.includes(id)) {
        return prevActiveIds.filter((activeId) => activeId !== id);
      } else {
        return [...prevActiveIds, id];
      }
    });

    if (onValueChange) {
      onValueChange(id);
    }
  };

  useEffect(() => {
    if (defaultValue.length > 0) {
      setActiveIds(defaultValue);
    }
  }, [defaultValue]);

  return Children.map(children, (child, index) => {
    const id = child.props["data-id"];

    // Preserve original child onClick and merge with handleToggleActiveId
    const originalOnClick = child.props.onClick;

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleToggleActiveId(id),
          onMouseLeave: () => handleToggleActiveId(id),
        }
      : {
          onClick: (e) => {
            if (originalOnClick) originalOnClick(e); // Call original onClick handler
            handleToggleActiveId(id); // Toggle active ID
          },
        };

    return cloneElement(
      child,
      {
        key: index,
        className: cn("relative inline-flex", child.props.className),
        "aria-selected": activeIds.includes(id),
        "data-checked": activeIds.includes(id) ? "true" : "false",
        ...interactionProps, // Merged interaction props
      },
      <>
        <AnimatePresence initial={false}>
          {activeIds.includes(id) && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className={cn("absolute inset-0", className)}
              transition={transition}
              initial={{ opacity: defaultValue.length > 0 ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
        <span className="z-10">{child.props.children}</span>
      </>
    );
  });
}
