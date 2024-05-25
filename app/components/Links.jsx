import Link from "next/link";

import { socialLinks } from "../utils/link";

const Links = () => {
  return (
    <div className="flex flex-wrap gap-3 mx-auto mb-6">
      {socialLinks?.map((ele) => (
        <Link
          key={ele.text} // Important for accessibility and uniqueness
          href={ele.link}
          className="p-1 px-2 w-fit rounded-full flex items-center gap-x-3 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300"
        >
          {ele.icon}
          <span>{ele.text}</span>
        </Link>
      ))}
    </div>
  );
};

export default Links;
