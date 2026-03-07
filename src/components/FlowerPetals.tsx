import React, { useEffect, useState } from 'react';

const FlowerPetals: React.FC = () => {
  const [petals, setPetals] = useState<{ id: number; left: string; duration: string; delay: string; size: string; opacity: number }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 20}s`,
      delay: `${Math.random() * 20}s`,
      size: `${10 + Math.random() * 20}px`,
      opacity: 0.3 + Math.random() * 0.4,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-[-50px] animate-petal-fall"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            opacity: petal.opacity,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary/40"
            style={{ transform: `rotate(${Math.random() * 360}deg)` }}
          >
            <path d="M12,2C12,2 14.5,7 19,7C23.5,7 24,12 24,12C24,12 23.5,17 19,17C14.5,17 12,22 12,22C12,22 9.5,17 5,17C0.5,17 0,12 0,12C0,12 0.5,7 5,7C9.5,7 12,2 12,2Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FlowerPetals;
