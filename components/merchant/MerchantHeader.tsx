type MerchantHeaderProps = {
  name: string;
};

export default function MerchantHeader({
  name,
}: MerchantHeaderProps) {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <header className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900">
        <span className="text-3xl">🏪</span>
      </div>

      <h1 className="mt-6 text-3xl font-bold text-white">
        {name}
      </h1>

      <p className="mt-2 text-zinc-400">
        {greeting}
      </p>
    </header>
  );
}