import { Separator } from "@/components/ui/separator";
import { CertificateCard } from "./ui/certificate-card";

import { certificates } from "@/utils/data";

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
