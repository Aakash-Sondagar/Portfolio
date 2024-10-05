"use client";

import * as React from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import {
  createContext,
  useContext,
  useState,
  useId,
  useEffect,
  useRef,
} from "react";
import { cn } from "@/lib/utils";
import useClickOutside from "@/utils/useClickOutside";

const DisclosureContext = createContext(undefined);

function DisclosureProvider({
  children,
  open: openProp,
  onOpenChange,
  variants,
}) {
  const [internalOpenValue, setInternalOpenValue] = useState(openProp);

  useEffect(() => {
    setInternalOpenValue(openProp);
  }, [openProp]);

  const toggle = () => {
    const newOpen = !internalOpenValue;
    setInternalOpenValue(newOpen);
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  return (
    <DisclosureContext.Provider
      value={{
        open: internalOpenValue, // Fix: pass the correct open value
        toggle,
        variants,
      }}
    >
      {children}
    </DisclosureContext.Provider>
  );
}

function useDisclosure() {
  const context = useContext(DisclosureContext);
  if (!context) {
    throw new Error("useDisclosure must be used within a DisclosureProvider");
  }
  return context;
}

export function Disclosure({
  open: openProp = false,
  onOpenChange,
  children,
  className,
  transition,
  variants,
}) {
  return (
    <MotionConfig transition={transition}>
      <div className={className}>
        <DisclosureProvider
          open={openProp}
          onOpenChange={onOpenChange}
          variants={variants}
        >
          {React.Children.toArray(children)[0]}
          {React.Children.toArray(children)[1]}
        </DisclosureProvider>
      </div>
    </MotionConfig>
  );
}

export function DisclosureTrigger({ children, className }) {
  const { toggle, open } = useDisclosure();

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(child, {
              onClick: toggle,
              role: "button",
              "aria-expanded": open,
              tabIndex: 0,
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle();
                }
              },
              className: cn(className, child.props.className),
              ...child.props,
            })
          : child;
      })}
    </>
  );
}

export function DisclosureContent({ children, className }) {
  const { open, toggle, variants } = useDisclosure();
  const uniqueId = useId();
  const contentRef = useRef(null); // Create a reference for the content area

  // Use the useClickOutside hook to detect outside clicks
  useClickOutside(contentRef, () => {
    if (open) {
      toggle(); // Close the disclosure if it's open and clicked outside
    }
  });

  const BASE_VARIANTS = {
    expanded: {
      height: "auto",
      opacity: 1,
    },
    collapsed: {
      height: 0,
      opacity: 0,
    },
  };

  const combinedVariants = {
    expanded: { ...BASE_VARIANTS.expanded, ...variants?.expanded },
    collapsed: { ...BASE_VARIANTS.collapsed, ...variants?.collapsed },
  };

  return (
    <div className={cn("overflow-hidden", className)} ref={contentRef}>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={uniqueId}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={combinedVariants}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Disclosure,
  DisclosureProvider,
  DisclosureTrigger,
  DisclosureContent,
};
