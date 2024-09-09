export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export const setViewAndCookie = (newView) => {
  document.cookie = `portfolio_view=${newView}; path=/; max-age=${
    60 * 60 * 24
  }`;
};
