import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "@/components/ui/dialog";

import { PlusIcon } from "lucide-react";

export const ProjectCard = ({ img, altImg, title, subtitle, description }) => {
  return (
    <div className="p-3">
      <Dialog transition={{ type: "spring", bounce: 0.05, duration: 0.25 }}>
        <DialogTrigger
          style={{ borderRadius: "12px" }}
          className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-50/10 bg-zinc-900 dark:border-zinc-950/10 dark:bg-white"
        >
          <DialogImage
            src={img}
            alt={altImg}
            className="h-48 w-full object-cover"
          />
          <div className="flex flex-grow flex-row items-end justify-between p-2">
            <div>
              <DialogTitle className="text-zinc-50 dark:text-zinc-950">
                {title}
              </DialogTitle>
              <DialogSubtitle className="text-zinc-400 dark:text-zinc-700">
                {subtitle}
              </DialogSubtitle>
            </div>
            <button
              type="button"
              className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-50/10 bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-50 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-950/10 dark:bg-white dark:text-zinc-500 dark:hover:bg-zinc-100 dark:hover:text-zinc-800 dark:focus-visible:ring-zinc-500"
              aria-label="Open dialog"
            >
              <PlusIcon size={12} />
            </button>
          </div>
        </DialogTrigger>
        <DialogContainer>
          <DialogContent
            style={{ borderRadius: "24px" }}
            className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-50/10 bg-zinc-900 dark:border-zinc-950/10 dark:bg-white sm:w-[500px]"
          >
            <DialogImage src={img} alt={altImg} className="h-full w-full" />
            <div className="p-6">
              <DialogTitle className="text-2xl text-zinc-50 dark:text-zinc-950">
                {title}
              </DialogTitle>
              <DialogSubtitle className="text-zinc-400 dark:text-zinc-700">
                {subtitle}
              </DialogSubtitle>
              <DialogDescription>
                <div className="text-zinc-400 dark:text-zinc-700 prose prose-zinc dark:prose-invert">
                  {description}
                </div>
              </DialogDescription>
            </div>
            <DialogClose className="text-zinc-950" />
          </DialogContent>
        </DialogContainer>
      </Dialog>
    </div>
  );
};

export const ProjectCardMobile = ({
  img,
  altImg,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="w-full">
      <Dialog transition={{ type: "spring", stiffness: 200, damping: 24 }}>
        <DialogTrigger
          style={{ borderRadius: "4px" }}
          className="border border-zinc-50/10 bg-zinc-900 dark:border-zinc-950/10 dark:bg-white"
        >
          <div className="flex items-center space-x-3 p-3">
            <DialogImage
              src={img}
              alt={altImg}
              className="h-8 w-8 object-cover object-top"
              style={{ borderRadius: "4px" }}
            />
            <div className="flex flex-col items-start justify-center space-y-0">
              <DialogTitle className="text-[10px] font-medium text-zinc-50 dark:text-zinc-950">
                {title}
              </DialogTitle>
              <DialogSubtitle className="text-[10px] text-zinc-400 dark:text-zinc-700">
                {subtitle}
              </DialogSubtitle>
            </div>
          </div>
        </DialogTrigger>
        <DialogContainer>
          <DialogContent
            style={{ borderRadius: "12px" }}
            className="relative h-auto w-[500px] border border-zinc-50/10 bg-zinc-900 dark:border-zinc-950/10 dark:bg-white m-2"
          >
            <div className="relative p-6">
              <div className="flex justify-center py-10">
                <DialogImage
                  src={img}
                  alt={altImg}
                  className="h-auto w-[200px]"
                />
              </div>
              <div>
                <DialogTitle className="text-zinc-50 dark:text-zinc-950">
                  {title}
                </DialogTitle>
                <DialogSubtitle className="font-light text-zinc-400 dark:text-zinc-700">
                  {subtitle}
                </DialogSubtitle>
                <div className="mt-4">
                  <ReactMarkdown className="text-zinc-400 dark:text-zinc-700 prose prose-zinc dark:prose-invert">
                    {description}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
            <DialogClose className="text-zinc-950" />
          </DialogContent>
        </DialogContainer>
      </Dialog>
    </div>
  );
};
