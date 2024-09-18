import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-0 py-8">
        <div className="relative bg-cover bg-center bg-no-repeat max-w-2xl w-full h-72 p-6 rounded-lg shadow-lg border border-earthy-brown">
          <Image
            src="/temp.svg"
            alt="Auto-running GIF"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            unoptimized
          />
        </div>
      </div>
    </>
  );
};
