const Footer = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full pt-3 mt-6">
      <div className="text-neutral-700 dark:text-neutral-500">
        <span>© {new Date().getFullYear()}</span>
        <span> Portfolio by @Aakash Sondagar</span>
      </div>
    </div>
  );
};

export default Footer;
