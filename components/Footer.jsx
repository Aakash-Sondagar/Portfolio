import { footerLinks } from "@/utils/content";

const Footer = () => {
  return (
    <footer className="mt-8 text-justify">
      <div className="flex justify-start space-x-2 tracking-tight">
        {footerLinks.map((link, index) => (
          <span key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-800 dark:text-stone-200 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-200"
            >
              {link.name}
            </a>
            <span className="ml-1 text-stone-800 dark:text-stone-200">
              {index < footerLinks.length - 1 && " | "}
            </span>
          </span>
        ))}
      </div>
      <div className="text-stone-800 dark:text-stone-200 font-thin text-sm mt-2">
        Made with ♥️ by Aakash Sondagar © 2025
      </div>
    </footer>
  );
};

export default Footer;
