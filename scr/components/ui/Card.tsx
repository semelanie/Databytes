import { HTMLAttributes } from "react";
import clsx from "clsx";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "rounded-card bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover",
        className
      )}
      {...props}
    />
  );
}
