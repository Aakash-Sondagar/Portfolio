import { footerLinks } from "@/utils/content";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="mt-20 pt-12 border-t border-neutral-200/50 dark:border-neutral-800/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-8">
        {footerLinks.map((link, index) => (
          <motion.span 
            key={link.name} 
            className="flex items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
          >
            <motion.a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 relative group font-medium"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-indigo-500 dark:bg-indigo-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </motion.a>
            {index < footerLinks.length - 1 && (
              <span className="text-neutral-400 dark:text-neutral-600 mx-3 text-sm">•</span>
            )}
          </motion.span>
        ))}
      </div>
      <motion.div 
        className="text-caption flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <span>Made with</span>
        <motion.span 
          className="text-red-500 text-base"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ♥
        </motion.span>
        <span>by</span>
        <a
          href="https://github.com/aakashsondagar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-800 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 font-medium"
        >
          Aakash Sondagar
        </a>
        <span>© 2025</span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;