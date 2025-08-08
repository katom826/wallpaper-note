type Variant = "primary" | "secondary";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: Variant;
};

export default function Button({
  children,
  onClick = undefined,
  variant = "secondary",
}: Props) {
  const variantClass = {
    primary: "bg-blue-300 hover:bg-blue-400 active:bg-blue-500",
    secondary: "bg-gray-300 hover:bg-gray-400 active:bg-gray-500",
  }[variant];

  return (
    <button
      onClick={onClick}
      className={`shadow-xl rounded-lg w-full cursor-pointer ${variantClass}`}
    >
      {children}
    </button>
  );
}
