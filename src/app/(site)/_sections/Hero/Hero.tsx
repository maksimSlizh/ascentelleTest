import Image from "next/image";
import { Container } from "@/shared/ui";
import s from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={s.root} aria-label="Hero">
      <Container>
        <div className={s.grid}>
          <a className={s.tile} href="#">
            <Image
              src="/img/Hero/hero-left.jpg"
              alt="Season sale"
              fill
              priority
            />
            <div className={s.caption}>
              <h2 className={s.title}>SEASON SALE</h2>
              <span className={s.link}>ПЕРЕЙТИ В РАЗДЕЛ</span>
            </div>
          </a>

          <a className={s.tile} href="#">
            <Image
              src="/img/Hero/hero-right.jpg"
              alt="Бестселлеры сезона"
              fill
            />
            <div className={s.caption}>
              <h2 className={s.title}>БЕСТСЕЛЛЕРЫ СЕЗОНА</h2>
              <span className={s.link}>ПЕРЕЙТИ В РАЗДЕЛ</span>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}
