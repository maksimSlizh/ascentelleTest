import React, { type ElementType, type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./Container.module.scss";

type Pad = number | true | undefined;

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  px?: Pad;
  pl?: Pad;
  pr?: Pad;
};

export type ContainerProps<T extends ElementType = "div"> = BaseProps &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseProps | "as"> & { as?: T };

const toPx = (v: Pad) => {
  if (typeof v === "number") return v;
  if (v === true) return 20;
  return undefined;
};

export function Container<T extends ElementType = "div">({
  children,
  className,
  px,
  pl,
  pr,
  as,
  style,
  ...rest
}: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType;

  const paddingLeft = toPx(pl ?? px);
  const paddingRight = toPx(pr ?? px);

  return (
    <Tag
      className={clsx(s.root, className)}
      style={{ paddingLeft, paddingRight, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
