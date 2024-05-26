import Image from "next/image";

const ImageComponent = () => {
  return (
    <>
      {/* Background Image */}
      <div className="h-60 relative w-full bg-neutral-400 dark:bg-[#111111] -z-10">
        <Image
          width={1000}
          height={1000}
          className="h-full w-full blur-sm object-cover absolute opacity-40"
          src="/images/bg.jpg"
          alt="background pic"
        />
      </div>
      {/* Profile Image */}
      <div className="w-full flex justify-center z-10 relative -top-9">
        <div className="absolute  p-1 rounded-full bg-neutral-100 dark:bg-[#111111]">
          <img
            width={800}
            height={800}
            className="w-16 h-16 rounded-full object-cover"
            src="/images/profilepic.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ImageComponent;
