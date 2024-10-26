import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Clipboard, Check } from "lucide-react"; // Import icons from lucide-react

const Connect = () => {
  const [isCopied, setIsCopied] = useState(false); // State to track if email is copied

  // Function to handle copying email to clipboard
  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setIsCopied(true); // Show check icon after copying
    setTimeout(() => {
      setIsCopied(false); // Reset after 2 seconds
    }, 2000);
  };

  return (
    <div className="pt-3 sm:pt-8 px-4 sm:px-0">
      <h1 className="font-medium text-center text-lg sm:indent-1 sm:text-left">
        Connect
      </h1>
      <Separator className="mt-1 bg-zinc-800" />
      <div className="flex flex-wrap mt-2 gap-1 sm:gap-2">
        <div className="text-mauve-light-11 dark:text-mauve-dark-11">
          <p className="mb-4">
            Follow me on{" "}
            <a
              href="https://x.com/AakashSondagar"
              target="_blank"
              className="external-link"
            >
              X
            </a>
            , view my code on{" "}
            <a
              href="https://github.com/Aakash-Sondagar"
              target="_blank"
              className="external-link"
            >
              Github
            </a>
            ,
            {/* explore my{" "}
            <a
              href="https://read.cv/ibelick"
              target="_blank"
              className="external-link"
            >
              Read.cv
            </a>{" "}
            profile, */}
            or email me directly at{" "}
            <span className="inline-flex items-center">
              <span
                className="relative cursor-pointer flex items-center no-underline"
                onClick={() => handleCopyEmail("aakashsondar@gmail.com")}
              >
                <span>aakashsondar@gmail.com</span>
                {isCopied ? (
                  <Check className="ml-2 text-green-500" size={18} />
                ) : (
                  <Clipboard
                    className="ml-2 cursor-pointer text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                    size={18}
                  />
                )}
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
