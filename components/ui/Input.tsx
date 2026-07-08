type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
};

export default function Input({
  value,
  onChange,
  placeholder = "",
  type = "text",
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        px-5
        py-4
        text-lg
        text-white
        placeholder:text-gray-500
        outline-none
        transition-all
        duration-200
        focus:border-yellow-500
      "
    />
  );
}