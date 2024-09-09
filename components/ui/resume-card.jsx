import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  separator,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex flex-row z-0 shadow-none p-0 sm:p-3 border-none bg-[#ffffff] dark:bg-[#0a0a0a] md:max-w-4xl mx-auto">
        {/* Avatar Logo Section */}
        <div className="hidden md:flex mb-0 mr-2 md:mr-4 w-8 h-8 md:w-12 md:h-12">
          <Avatar className="w-full h-full flex items-center justify-center border">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain w-full h-full bg-white"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>

        {/* Content Section */}
        <div className="flex-grow group">
          <CardHeader className="p-0 text-left">
            <div className="flex flex-row md:flex-row justify-between items-start">
              <h3 className="text-xs sm:text-sm inline-flex justify-center items-center font-medium leading-none">
                {title}
                <ChevronRightIcon
                  className={cn(
                    "size-1 sm:size-4 hidden sm:flex translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm text-wrap tabular-nums text-muted-foreground">
                {period}
              </div>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              {subtitle}
            </div>
          </CardHeader>

          {/* Description that expands and collapses */}
          {description && isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-xs sm:text-sm"
            >
              {badges && (
                <div className="my-2 space-x-2">
                  {badges.map((badge, index) => (
                    <Badge variant="secondary" className="my-1 px-1" key={index}>
                      <div className="text-xs sm:text-sm  align-middle font-normal">
                        {badge}
                      </div>
                    </Badge>
                  ))}
                </div>
              )}
              <Markdown className="text-xs text-pretty sm:text-base">
                {description}
              </Markdown>
            </motion.div>
          )}
        </div>
      </Card>
      {separator && <Separator className="mt-2 bg-zinc-800 mb-2" />}
    </Link>
  );
};
