import Image from "next/image";

const CasestudyVideoFallback = () => {
  return (
    <div className="h-screen">
      <Image
        src="/casestudyImages/digi-video-poster.png"
        alt="Digilocker image"
      />
    </div>
  );
};

export default CasestudyVideoFallback;
