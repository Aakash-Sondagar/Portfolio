import { footerLinks } from "@/utils/content";

const Footer = () => {
  return (
    <footer className="my-8">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 tracking-tight">
        {footerLinks.map((link, index) => (
          <span key={link.name} className="flex items-center">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-indigo-500 dark:bg-indigo-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </a>
            {index < footerLinks.length - 1 && (
              <span className="text-gray-400 dark:text-gray-500 mx-1">•</span>
            )}
          </span>
        ))}
      </div>
      <div className="text-gray-600 dark:text-gray-400 text-sm mt-4 tracking-normal">
        Made with{" "}
        <span className="text-red-500 animate-pulse duration-1000">♥</span> by{" "}
        <a
          href="https://github.com/aakashsondagar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
        >
          Aakash Sondagar
        </a>{" "}
        © 2025
      </div>
    </footer>
  );
};

export default Footer;