import { footerLinks } from "@/utils/content";

const Footer = () => {
  return (
    <footer className="mt-6 pt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 tracking-tight mb-6">
        {footerLinks.map((link, index) => (
          <span key={link.name} className="flex items-center">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 relative group font-medium"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
            {index < footerLinks.length - 1 && (
              <span className="text-gray-300 dark:text-gray-600 mx-2 text-sm">•</span>
            )}
          </span>
        ))}
      </div>
      <div className="text-gray-500 dark:text-gray-500 text-sm tracking-normal">
        Made with{" "}
        <span className="text-red-500 animate-pulse duration-1000">♥</span> by{" "}
        <a
          href="https://github.com/aakashsondagar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-medium"
        >
          Aakash Sondagar
        </a>{" "}
        © 2025
      </div>
    </footer>
  );
};

export default Footer;