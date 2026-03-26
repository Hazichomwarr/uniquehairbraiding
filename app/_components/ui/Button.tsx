import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  onClick,
  variant = "primary",
}: Props) {
  const base = "px-4 py-2 rounded-md font-medium transition";

  const styles =
    variant === "primary"
      ? "bg-green-600 text-white hover:bg-green-700"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
