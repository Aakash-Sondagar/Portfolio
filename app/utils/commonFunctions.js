import data from "./data";

export const resumeDownload = async () => {
  try {
    const pdfPath = "/images/Aakash_Sondagar_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Aakash_Sondagar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.open(data?.resumeUrl, "_blank");
  } catch (error) {
    console.error("Error fetching PDF:", error);
  }
};
