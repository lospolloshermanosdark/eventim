"use client";

import { useEffect, useState } from "react";

export default function ReservationTimer() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 min = 600s

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // formata mm:ss
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div data-qa="reservation-timer">
      <div className="timer-box-color" style={{ transition: "300ms" }}>
        <div className="animate-show">
          <div className="text-center timer-box theme-element-radius">
            <i className="icon icon-ticketalarm-small"></i>
            <span data-qa="time" className="timer-box-text">
              Tempo restante:&nbsp;{formatTime(timeLeft)} Minutos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
