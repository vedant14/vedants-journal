import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

export function GithubHeatmap() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/get-github-contributions")
      .then((r) => r.json())
      .then((d) => {
        setData(d.contributions || []);
        setTotal(d.total || 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const endDate = new Date();
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);

  if (loading) {
    return (
      <div className="h-32 animate-pulse bg-zinc-100 rounded-lg" />
    );
  }

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-zinc-600">GitHub Activity</span>
        <span className="text-sm text-zinc-400">{total} contributions in the last year</span>
      </div>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={data}
        classForValue={(value) => {
          if (!value || value.count === 0) return "color-empty";
          if (value.count <= 2) return "color-scale-1";
          if (value.count <= 5) return "color-scale-2";
          if (value.count <= 9) return "color-scale-3";
          return "color-scale-4";
        }}
        tooltipDataAttrs={(value) => ({
          "data-tip": value?.date
            ? `${value.date}: ${value.count} contributions`
            : "No contributions",
        })}
        showWeekdayLabels={false}
      />
      <style jsx>{`
        :global(.react-calendar-heatmap .color-empty) {
          fill: #f4f4f5;
        }
        :global(.react-calendar-heatmap .color-scale-1) {
          fill: #bbf7d0;
        }
        :global(.react-calendar-heatmap .color-scale-2) {
          fill: #4ade80;
        }
        :global(.react-calendar-heatmap .color-scale-3) {
          fill: #16a34a;
        }
        :global(.react-calendar-heatmap .color-scale-4) {
          fill: #14532d;
        }
      `}</style>
    </div>
  );
}
