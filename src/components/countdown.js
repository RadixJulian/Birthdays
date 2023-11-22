"use client"
import { useEffect, useState } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date("December 3, 2023 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      return "Happy Birthday!";
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl text-white bg-primary p-2 rounded-t-md mb-4">
        Countdown to December 3, 2023
      </h1>
      <div className="text-2xl font-bold text-primary mb-4">
        {timeLeft}
      </div>
    </div>
  );
};

export default Countdown;