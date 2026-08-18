import { HTMLAttributes } from "react";
import clsx from "clsx";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "rounded-card bg-white p-6 shadow-card ring-1 ring-transparent transition-all duration-300 hover:shadow-card-hover hover:ring-primary/40",
        className
      )}
      {...props}
    />
  );
}
