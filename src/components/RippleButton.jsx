import { useState } from "react";

export default function RippleButton() {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <button
        onClick={handleClick}
        className="relative overflow-hidden px-8 py-3 bg-blue-500 text-white rounded-xl text-lg font-semibold hover:bg-blue-600 transition"
      >
        JD CODE
        {/* Ripples */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute bg-white/40 rounded-full animate-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: "20px",
              height: "20px",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </button>

      {/* Custom animation */}
      <style>
        {`
          @keyframes ripple {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(8);
              opacity: 0;
            }
          }

          .animate-ripple {
            animation: ripple 0.6s linear;
          }
        `}
      </style>
    </div>
  );
}
