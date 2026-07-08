import { Clock } from "lucide-react";

const visits = [
  {
    item: "Masala Tea",
    date: "Today",
  },
  {
    item: "Cold Coffee",
    date: "Yesterday",
  },
];

export default function RecentVisits() {
  return (
    <section className="mt-10">

      <div className="mb-5 flex items-center gap-2">

        <Clock size={18} className="text-zinc-400" />

        <h3 className="text-lg font-semibold text-white">
          Recent Visits
        </h3>

      </div>

      <div className="space-y-3">

        {visits.map((visit) => (
          <div
            key={visit.item}
            className="flex items-center justify-between rounded-2xl bg-[#18181B] px-5 py-4"
          >
            <span className="text-white">
              {visit.item}
            </span>

            <span className="text-sm text-zinc-400">
              {visit.date}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}