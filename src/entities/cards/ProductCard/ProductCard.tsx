"use client";

import Image from "next/image";
import { QuickVariants } from "@/features/product/quick-variants";
import s from "./ProductCard.module.scss";

type Color = { id: string; hex: string; name?: string };

type Props = {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  img: string;
  isNew?: boolean;
  sizes?: string[];
  colors?: Color[];
  onSelectSize?: (size: string) => void;
  onSelectColor?: (id: string) => void;
};

export function ProductCard({
  id,
  title,
  price,
  oldPrice,
  img,
  isNew,
  sizes = [],
  colors = [],
  onSelectSize,
  onSelectColor,
}: Props) {
  const showVariants = sizes.length > 0 || colors.length > 0;

  return (
    <article className={s.root}>
      <div className={s.card}>
        <div className={s.top}>
          {isNew && <span className={s.badge}>NEW</span>}
          <button
            className={s.like}
            aria-label="В избранное"
            type="button"
          >
            <Image src="/svg/Header/heart.svg" alt="" width={16} height={16} />
          </button>
        </div>

        <div className={s.media}>
          <Image src={img} alt={title} fill />
        </div>

        {showVariants && (
          <div className={s.variants}>
            <QuickVariants
              productId={id}
              sizes={sizes}
              colors={colors}
              onSelectSize={onSelectSize}
              onSelectColor={onSelectColor}
            />
          </div>
        )}
      </div>

      <div className={s.info}>
        <h3 className={s.title}>{title}</h3>
        <div className={s.prices}>
          <span className={s.priceNow}>{price.toLocaleString()} ₽</span>
          {oldPrice && (
            <span className={s.priceOld}>{oldPrice.toLocaleString()} ₽</span>
          )}
        </div>
      </div>
    </article>
  );
}
