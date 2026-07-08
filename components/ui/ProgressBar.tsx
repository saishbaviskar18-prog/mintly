type ProgressBarProps = {
  value: number;
  max: number;
};

export default function ProgressBar({
  value,
  max,
}: ProgressBarProps) {
  const percentage = (value / max) * 100;

  return (
    <div className="mt-4">

      <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

        <div
          className="h-full rounded-full bg-yellow-500 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="mt-3 text-sm text-gray-400">
        {value} / {max} Visits
      </p>

    </div>
  );
}