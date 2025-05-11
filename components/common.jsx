import { Link } from "next-view-transitions";
import { ChevronLeft } from "lucide-react";

export const Name = () => {
  return (
    <div className="mb-8">
      <h1 className="flex text-3xl text-stone-800 dark:text-stone-200 font-semibold mb-0">
        Aakash Sondagar
      </h1>
      <h4 className="text-zinc-500 dark:text-zinc-400 font-light text-base my-0">
        Software Engineer
      </h4>
    </div>
  );
};

export const AnimatedName = ({ href }) => {
  if (!href) href = "/";
  return (
    <Link
      href={href}
      className="flex items-center mb-8 font-light text-base text-zinc-500 dark:text-zinc-400 no-underline fade-in"
    >
      <ChevronLeft className="h-4 w-4 ml-1" /> Aakash Sondagar
    </Link>
  );
};

export const Small = ({ children }) => {
  return (
    <div className="text-sm text-gray-700 dark:text-gray-300 font-normal">
      {children}
    </div>
  );
};

export const getMetaData = (title, canonical) => {
  return {
    title: title,
    alternates: {
      canonical: canonical,
    },
  };
};

export const formatDate = (date, includeRelative = true) => {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  const diffTime = currentDate - targetDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  let formattedDate = "";

  if (diffYears > 0) {
    formattedDate = `${diffYears} y ago`;
  } else if (diffMonths > 0) {
    formattedDate = `${diffMonths} m ago`;
  } else if (diffDays > 0) {
    formattedDate = `${diffDays} d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
};
