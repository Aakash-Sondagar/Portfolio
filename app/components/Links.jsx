import Link from "next/link";

import { socialLinks } from "../utils/link";

const Links = () => {
  return (
    <div className="flex flex-wrap justify-center gap-1 mx-auto my-5">
      {socialLinks?.map((ele) => (
        <Link
          key={ele.text} // Important for accessibility and uniqueness
          href={ele.link}
          className="p-1 px-3 w-fit rounded-full flex items-center gap-x-3 text-neutral-700 bg-neutral-100 hover:bg-neutral-200 dark:text-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 duration-300 transition-all ease-in font-Intermedium "
        >
          {ele.icon}
          <span>{ele.text}</span>
        </Link>
      ))}
    </div>
  );
};

export default Links;
