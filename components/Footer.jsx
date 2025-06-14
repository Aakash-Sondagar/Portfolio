import { footerLinks } from "@/utils/content";

const Footer = () => {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
        {footerLinks.map((link, index) => (
          <span key={link.name} className="flex items-center">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              {link.name}
            </a>
            {index < footerLinks.length - 1 && (
              <span className="text-gray-300 dark:text-gray-600 mx-3">•</span>
            )}
          </span>
        ))}
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-sm">
        Made with{" "}
        <span className="text-red-500">♥</span> by{" "}
        <a
          href="https://github.com/aakashsondagar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
        >
          Aakash Sondagar
        </a>{" "}
        © 2025
      </div>
    </footer>
  );
};

export default Footer;