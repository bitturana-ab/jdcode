import { useRef } from "react";

export default function MagneticButton() {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btnRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    btnRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <button
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="px-8 py-3 bg-purple-500 text-white text-lg font-semibold rounded-xl transition-transform duration-200 hover:bg-purple-600"
      >
        Come Near Me 🧲
      </button>
    </div>
  );
}
