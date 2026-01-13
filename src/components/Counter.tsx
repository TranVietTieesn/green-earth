'use client';

import React, { useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export default function Counter({ end, suffix = '', decimals = 0, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = end * easeOutCubic;

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

  return (
    <div className="counter text-3xl md:text-4xl font-bold text-primary-600">
      {displayValue}
      {suffix}
    </div>
  );
}
