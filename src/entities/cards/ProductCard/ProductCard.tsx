import Image from "next/image";
import s from "./ProductCard.module.scss";

type Props = {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  img: string;
  isNew?: boolean;
};

export function ProductCard({ title, price, oldPrice, img, isNew }: Props) {
  return (
    <article className={s.root}>
      <div className={`${s.card} ${isNew ? s.new : ""}`}>
        {/* верхние бейджи */}
        <div className={s.top}>
          {isNew && <span className={s.badge}>NEW</span>}
          <button className={s.like} aria-label="В избранное">
            <Image src="/svg/Header/heart.svg" alt="" width={16} height={16} />
          </button>
        </div>

        {/* изображение */}
        <div className={s.media}>
          <Image src={img} alt={title} fill />
        </div>
      </div>

      {/* подписи и цены */}
      <div className={s.info}>
        <h3 className={s.title}>{title}</h3>
        <div className={s.prices}>
          <span className={s.priceNow}>{price.toLocaleString()} ₽</span>
          {oldPrice && <span className={s.priceOld}>{oldPrice.toLocaleString()} ₽</span>}
        </div>
      </div>
    </article>
  );
}
