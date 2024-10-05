import { Separator } from "@/components/ui/separator";
import { CertificateCard } from "./ui/certificate-card";

const certificates = [
  {
    img: "https://images.beta.cosmos.so/5b21c112-ed1d-45cd-baf0-38186a15af8e?format=jpeg",
    altImg: "lesothers.studio",
    title: "lesothers.studio",
    subtitle: "Edouard Wilfrid Buquet",
    description: `Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery.`,
  },
];

const Certificates = ({ componentToShow }) => {
  return (
    <div className="pt-3 sm:pt-8 px-4 sm:px-0">
      <h1 className="font-medium text-center text-lg sm:indent-1 sm:text-left">
        Certificates
      </h1>
      <Separator className="mt-1 bg-zinc-700 w-full" />
      <div className="mt-2 p-1 flex w-full gap-2 flex-row flex-wrap mx-auto">
        {certificates.map((certificate, index) => (
          <CertificateCard
            componentToShow={componentToShow}
            key={index}
            {...certificate}
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
