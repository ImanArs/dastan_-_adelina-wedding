import { useState, useEffect } from "react";

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2025-01-09T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference: number = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-full text-center flex flex-col gap-5 playfair">
      {/* <h2 className="text-3xl font-bold ">До свадьбы</h2> */}
      <div className="grid grid-cols-4 gap-6">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center">
            <span
              className="text-2xl p-5 bg-black text-white rounded-[14px] flex items-center justify-center"
              style={{ width: "60px", height: "60px" }}
            >
              {value}
            </span>
            <div className="text-lg mt-2 capitalize">{label === "days" ? "Дней" : label === "hours" ? "Часов" : label === "minutes" ? "Минут" : "Секунд"}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
