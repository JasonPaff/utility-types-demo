import type { ButtonHTMLAttributes } from "react";
import type { Dynamic } from "./utility-types";
import clsx from "clsx";

interface CommonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

interface BusyProps {
  busyLabel: string;
  isBusy: boolean;
}

type ButtonProps = CommonProps & Dynamic<BusyProps>;

export const BetterButton = ({
  busyLabel,
  isBusy,
  label,
  ...options
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "bg-indigo-500 hover:bg-indigo-400 active:scale-95 px-4 py-2 text-gray-200 rounded-lg",
        "disabled:scale-100 disabled:hover:bg-indigo-500/50 disabled:bg-opacity-50"
      )}
      {...options}
    >
      {isBusy ? busyLabel : label}
    </button>
  );
};
