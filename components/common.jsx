import { Link } from "next-view-transitions";
import { ChevronLeft } from "lucide-react";

export const Name = () => {
  return (
    <div className="mb-6 sm:mb-12 mt-6 sm:mt-0">
      <h1 className="flex text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 font-bold mb-2 tracking-tight">
        Aakash Sondagar
      </h1>
      <h4 className="text-gray-600 dark:text-gray-400 font-normal text-base sm:text-lg my-0">
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
      className="flex items-center mb-6 font-medium text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 no-underline transition-all duration-200 group"
    >
      <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" /> 
      Aakash Sondagar
    </Link>
  );
};

export const Small = ({ children }) => {
  return (
    <div className="text-sm text-gray-500 dark:text-gray-500 font-normal mb-4">
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