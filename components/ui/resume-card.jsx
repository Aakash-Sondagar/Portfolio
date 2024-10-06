import Link from "next/link";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ChevronRight } from "lucide-react";

export const ResumeCard = ({
  logoUrl,
  altText,
  company,
  role,
  href,
  badges,
  period,
  description,
}) => {
  return (
    <Link href={href || "#"} className="cursor-default">
      <Accordion
        className="flex w-full flex-col"
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        variants={{
          expanded: {
            opacity: 1,
            scale: 1,
          },
          collapsed: {
            opacity: 0,
            scale: 0.7,
          },
        }}
      >
        <div className="flex items-center p-0 sm:p-1 sm:items-start">
          <div className="hidden sm:flex sm:mx-2 sm:mt-2">
            <Avatar className="w-12 h-12 flex items-center justify-center border">
              <AvatarImage
                src={logoUrl}
                className="object-contain w-12 h-12 bg-white"
              />
              <AvatarFallback>{altText}</AvatarFallback>
            </Avatar>
          </div>

          <AccordionItem value="getting-started" className="flex-grow py-2">
            <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
              <div className="flex items-center w-full">
                <ChevronRight
                  className={cn(
                    "h-4 w-4 text-zinc-950 transition-transform duration-200 dark:text-zinc-50",
                    !href && "group-data-[expanded]:rotate-90"
                  )}
                />
                <div className="flex flex-grow flex-row justify-between ml-2">
                  <div className="flex flex-col">
                    <div className="text-sm sm:text-base text-zinc-950 dark:text-zinc-50">
                      {company}
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-950 dark:text-gray-400">
                      {role}
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground text-right">
                    {period}
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="origin-left">
              {badges && (
                <div className="flex flex-wrap mt-2 gap-[2px] sm:gap-2">
                  {badges.map((badge, index) => (
                    <Badge className="z-0 m-[2px] text-xs" key={index}>
                      <div className="align-middle font-semibold">{badge}</div>
                    </Badge>
                  ))}
                </div>
              )}
              <div className="ml-1 mt-1 font-thin text-sm sm:text-base">
                {description}
              </div>
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion>
    </Link>
  );
};
