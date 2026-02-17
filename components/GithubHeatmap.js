import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { GitHubIcon } from "./SocialIcons";
function formatDate(dateStr) {
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });

  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getOrdinal(day)} ${month}`;
}

export function GithubHeatmap() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [tooltip, setTooltip] = useState(null);

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
    return <div className="h-32 animate-pulse bg-zinc-100 rounded-lg" />;
  }

  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-2">
        <GitHubIcon className="w-6 fill-zinc-500" />
        <p className="text-sm text-zinc-500">
          <span className="font-semibold">{total}</span> contributions in the
          last year :)
        </p>
      </div>

      <div className="max-w-2xl">
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={data}
          classForValue={(value) => {
            const count = value?.count || 0;
            if (count === 0) return "color-empty";
            if (count <= 2) return "color-scale-1";
            if (count <= 5) return "color-scale-2";
            if (count <= 9) return "color-scale-3";
            return "color-scale-4";
          }}
          onMouseOver={(event, value) => {
            if (!value?.date) return;

            const count = value.count || 0;
            const date = formatDate(value.date);

            let content =
              count === 0
                ? `Vedant was touching grass on ${date}`
                : `${count} commit${count > 1 ? "s" : ""} on ${date}`;

            setTooltip({
              x: event.clientX,
              y: event.clientY,
              content,
            });
          }}
          onMouseLeave={() => setTooltip(null)}
          showWeekdayLabels={false}
        />
      </div>

      {tooltip && (
        <div
          className="fixed z-50 px-3 py-1.5 text-xs text-white bg-zinc-900 rounded-md shadow-lg pointer-events-none transition-opacity duration-150"
          style={{
            top: tooltip.y + 12,
            left: tooltip.x + 12,
          }}
        >
          {tooltip.content}
        </div>
      )}

      <style jsx>{`
        :global(.react-calendar-heatmap) {
          width: 100%;
        }

        :global(.react-calendar-heatmap rect) {
          rx: 3px;
          ry: 3px;
        }

        :global(.react-calendar-heatmap .color-empty) {
          fill: #ebedf0;
        }

        :global(.react-calendar-heatmap .color-scale-1) {
          fill: #9be9a8;
        }

        :global(.react-calendar-heatmap .color-scale-2) {
          fill: #40c463;
        }

        :global(.react-calendar-heatmap .color-scale-3) {
          fill: #30a14e;
        }

        :global(.react-calendar-heatmap .color-scale-4) {
          fill: #216e39;
        }
      `}</style>
    </div>
  );
}
