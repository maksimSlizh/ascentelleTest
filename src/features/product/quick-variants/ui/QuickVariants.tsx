"use client";

import s from "./QuickVariants.module.scss";

type Color = { id: string; hex: string; name?: string };

type Props = {
  productId: string;
  sizes?: string[];
  colors?: Color[];
  onSelectSize?: (size: string) => void;
  onSelectColor?: (id: string) => void;
};

/** Панель быстрых вариаций: показывается, когда .variants в карточке выезжает */
export function QuickVariants({
  sizes = [],
  colors = [],
  onSelectSize,
  onSelectColor,
}: Props) {
  return (
    <div className={s.panel}>

      {colors.length > 0 && (
        <div className={s.colors} role="listbox" aria-label="Цвета">
          {colors.map((c) => (
            <button
              key={c.id}
              type="button"
              className={s.color}
              style={{ backgroundColor: c.hex }}
              title={c.name || ""}
              aria-label={c.name || "Цвет"}
              onClick={() => onSelectColor?.(c.id)}
            />
          ))}
        </div>
      )}

      {sizes.length > 0 && (
        <div className={s.sizes} role="listbox" aria-label="Размеры">
          {sizes.map((sz) => (
            <button
              key={sz}
              type="button"
              className={s.size}
              onClick={() => onSelectSize?.(sz)}
            >
              {sz}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
