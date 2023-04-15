import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  busyOptions?: BusyProps;
  label: string;
}

interface BusyProps {
  busyLabel: string;
  isBusy: boolean;
}

export const ObjectButton = ({
  busyOptions = { busyLabel: "", isBusy: false },
  label,
  ...options
}: ButtonProps) => {
  const { busyLabel, isBusy } = busyOptions;

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

// <ObjectButton
//     busyOptions={{ busyLabel: "Saving...", isBusy: isSaving }}
//     disabled={isSaving}
//     label={"Save Stuff"}
//     onClick={onSave}
// />
