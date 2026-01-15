import { useEffect, useState } from "react";

interface StatItem {
  value: number;
  text: string;
}

const stats: StatItem[] = [
  { value: 32000, text: "Experienced tutors" },
  { value: 300000, text: "5-star tutor reviews" },
  { value: 120, text: "Subjects taught" },
  { value: 200, text: "Tutor nationalities" },
];

const Statistics = () => {
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    let animationFrame: number;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const newCounters = stats.map((stat) =>
        Math.floor(stat.value * progress)
      );
      setCounters(newCounters);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative flex justify-center h-29 px-30.5 items-center rounded-[30px]">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1312 116"
        fill="none"
      >
        <rect
          x="1"
          y="1"
          width="1310"
          height="114"
          rx="30"
          ry="30"
          stroke="#f97316"
          strokeWidth="2"
          strokeDasharray="10 10"
          strokeDashoffset="0"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="20"
            dur="1s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
      <ul className="flex justify-center items-center gap-25">
        {stats.map((stat, index) => (
          <li className="statistics-list-item text-center" key={stat.text}>
            <p className="statistics-list-item-number text-2xl font-bold absolute">
              {counters[index].toLocaleString()}+
            </p>
            <span className="opacity-0 statistics-list-item-number text-2xl font-bold ">
              {stat.value.toLocaleString()}+
            </span>
            <p className="statistics-list-item-text">{stat.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
