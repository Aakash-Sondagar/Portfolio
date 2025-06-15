import { Link } from "next-view-transitions";
import { ChevronLeft } from "lucide-react";

export const Name = () => {
  return (
    <div className="mb-12 fade-in">
      <h1 className="text-display text-gray-900 dark:text-gray-100 mb-2">
        Aakash Sondagar
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
        Software Engineer
      </p>
    </div>
  );
};

export const AnimatedName = ({ href }) => {
  if (!href) href = "/";
  return (
    <Link
      href={href}
      className="inline-flex items-center mb-8 font-medium text-gray-600 dark:text-gray-400 no-underline hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-200 group"
    >
      <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-0.5 transition-transform duration-200" /> 
      <span className="relative">
        Aakash Sondagar
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-400 group-hover:w-full transition-all duration-300"></span>
      </span>
    </Link>
  );
};

export const Small = ({ children }) => {
  return (
    <div className="text-caption">
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