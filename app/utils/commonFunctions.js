import data from "./data";

export const resumeDownload = async () => {
  const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
  const pdfUrl = data?.resumeUrl;

  try {
    const response = await fetch(`${corsProxyUrl}${pdfUrl}`);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Aakash_Sondagar_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    console.error("Error fetching PDF:", error);
  }
};
