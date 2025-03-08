import { useTrail, animated } from "@react-spring/web";
import { useEffect } from "react";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export default function BlobCursor({ blobType = "circle", fillColor = "#ffffff" }) {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));

  const handleMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    api.start({ xy: [x, y] });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  const sizes = [
    { width: 40, height: 40 },  // Smallest outer blob
    { width: 70, height: 70 },  // Medium size
    { width: 50, height: 50 },  // Smallest inner blob
  ];
  
  const pseudoStyles = [
    { top: 12, left: 12, width: 12, height: 12 },
    { top: 25, left: 25, width: 25, height: 25 },
    { top: 18, left: 18, width: 18, height: 18 },
  ];  

  return (
      <div className="w-full h-full pointer-events-none fixed top-0 left-0 z-[9999]">
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="blob">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10"
          />
        </filter>
      </svg>

      {/* Blob Cursor */}
      <div
        className="absolute w-full h-full overflow-hidden bg-transparent"
        style={{ filter: 'url("#blob")' }}
      >
        {trail.map((props, index) => (
          <animated.div
            key={index}
            className="absolute opacity-60 shadow-lg"
            style={{
              transform: props.xy.to(trans),
              width: `${sizes[index].width}px`,
              height: `${sizes[index].height}px`,
              borderRadius: blobType === "circle" ? "50%" : "0%",
              backgroundColor: fillColor,
            }}
          >
            {/* Pseudo-element effect */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: `${pseudoStyles[index].top}px`,
                left: `${pseudoStyles[index].left}px`,
                width: `${pseudoStyles[index].width}px`,
                height: `${pseudoStyles[index].height}px`,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.8)",
              }}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
}
