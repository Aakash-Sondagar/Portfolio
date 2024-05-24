import data from "./data";

export const resumeDownload = () => {
  try {
    fetch(data?.resumeUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "AakashSondagar.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  } catch (error) {
    console.log("Error in resumeDownload Fn", error);
  }
};
