import Image from "next/image";
import { Container } from "@/shared/ui";
import s from "./CollectionSpot.module.scss";

export function CollectionSpot() {
  return (
    <section className={s.root} aria-labelledby="csp-title">
      <Container>
        <div className={s.grid}>
          <a className={s.left} href="#">
            <Image
              src="/img/CollectionSpot/cs-main.png"
              alt="Коллекция Back to Office"
              fill
              priority
            />
            <div className={s.leftBadge}>
              <div className={s.leftTitle}>КОЛЛЕКЦИЯ BACK TO OFFICE</div>
              <div className={s.leftLink}>ПЕРЕЙТИ В РАЗДЕЛ</div>
            </div>
          </a>

          <div className={s.rightCol}>
            <button className={`${s.arrow} ${s.arrowLeft}`} aria-label="Назад">
              <Image src="/img/icons/arr-left.png" alt="" width={20} height={20} />
            </button>
            <button className={`${s.arrow} ${s.arrowRight}`} aria-label="Вперёд">
              <Image src="/img/icons/arr-right.png" alt="" width={20} height={20} />
            </button>

            <article className={s.card}>

              <div className={s.media}>
                <span className={s.badge}>BACK TO OFFICE</span>
                <Image src="/img/CollectionSpot/cs1.png" alt="Пиджак классический" fill />
                <button className={s.like} aria-label="В избранное">
                  <Image src="/img/icons/favorites.png" alt="" width={16} height={16} />
                </button>
              </div>

              <div className={s.info}>
                <h3 className={s.title}>Пиджак классический</h3>
                <div className={s.prices}>
                  <span className={s.priceNow}>3 305 ₽</span>
                  <span className={s.priceOld}>3 520 ₽</span>
                </div>
              </div>
            </article>

            <div className={s.dots} aria-hidden>
              <span className={`${s.dot} ${s.dotActive}`} />
              <span className={s.dot} />
              <span className={s.dot} />
              <span className={s.dot} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
