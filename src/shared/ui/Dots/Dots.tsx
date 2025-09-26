import React from "react";
import clsx from "clsx";
import s from "./Dots.module.scss";

type Props = {
  total: number;
  active?: number;
  onSelect?: (index: number) => void;
  className?: string;
  size?: number;
  gap?: number;
};

export function Dots({
  total,
  active = 0,
  onSelect,
  className,
  size = 8,
  gap = 4,
}: Props) {
  if (total <= 1) return null;

  return (
    <div
      className={clsx(s.root, className)}
      style={{ ["--dot-size" as any]: `${size}px`, ["--dot-gap" as any]: `${gap}px` }}
      role="tablist"
      aria-label="Индикатор слайдов"
    >
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === active;
        return (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Слайд ${i + 1}`}
            className={clsx(s.dot, isActive && s.active)}
            onClick={onSelect ? () => onSelect(i) : undefined}
          />
        );
      })}
    </div>
  );
}
