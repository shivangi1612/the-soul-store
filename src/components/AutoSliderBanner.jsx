import BlurText from "./BlurText";
export default function AutoSliderBanner() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen overflow-hidden flex flex-col items-center justify-center">
     
      <video
        className="absolute w-full h-full object-cover"
        src="/video/video.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50">
      <BlurText
        text="Premium Streetwear"
        delay={250}
        animateBy="letters"
        direction="top"
        className="text-4xl md:text-6xl mt-8 mb-4 font-bold whitespace-normal"
        />
        <p className="text-2xl mb-8 text-zinc-300">Elevate Your Style</p>
        <button
          onClick={scrollToProducts}
          className="px-8 py-3 border-2 border-zinc-800 bg-black hover:bg-zinc-800 rounded-lg transition-colors"
        >
          Shop
        </button>
      </div>
    </div>
  );
}
