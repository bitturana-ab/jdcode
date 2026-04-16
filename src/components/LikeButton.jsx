import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setLiked(!liked);

    // trigger animation
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <button
        onClick={handleClick}
        className="relative flex items-center justify-center"
      >
        {/* Heart Icon */}
        <span
          className={`text-5xl transition-transform duration-300 ${
            liked ? "text-red-500 scale-125" : "text-gray-400"
          } ${animate ? "animate-ping" : ""}`}
        >
          ❤️
        </span>

        {/* Burst Effect */}
        {animate && (
          <span className="absolute w-16 h-16 rounded-full border-4 border-red-400 animate-ping"></span>
        )}
      </button>
    </div>
  );
}
