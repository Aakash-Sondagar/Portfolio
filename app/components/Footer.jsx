const Footer = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full pt-3 mt-6">
      <div className="text-neutral-700 dark:text-neutral-500">
        <span>Thank you for visiting my digital home.</span>
        <span> © Aakash Sondagar {new Date().getFullYear()}.</span>
      </div>
    </div>
  );
};

export default Footer;
