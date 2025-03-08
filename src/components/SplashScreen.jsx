import { useEffect, useState } from "react";

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.classList.add("overflow-hidden"); 

    const characters = "0123456789ABCDEF";
    const interval = setInterval(() => {
      Array.from({ length: 50 }, () =>
        Array.from({ length: 5 }, () => characters[Math.floor(Math.random() * characters.length)]).join("")
      );
    }, 50);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          clearInterval(interval);
          setTimeout(() => {
            document.body.classList.remove("overflow-hidden"); // Show scrollbar after splash screen
            onComplete();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(timer);
      clearInterval(interval);
      document.body.classList.remove("overflow-hidden"); 
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mt-8 mb-4">THE SOUL STORE.</h1>
      <div className="w-64 h-1 bg-zinc-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
