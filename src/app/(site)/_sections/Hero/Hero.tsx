import Image from "next/image";
import { Container } from "@/shared/ui";
import s from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={s.root} aria-label="Hero">
      <div className={s.inner}>
        <Container>
          <div className={s.grid}>
            <div className={s.tile} >
              <Image
                src="/img/Hero/hero-left.jpg"
                alt="Season sale"
                fill
                priority
              />
              <a className={s.caption} href="#">
                <h2 className={s.title}>SEASON SALE</h2>
                <span className={s.link}>ПЕРЕЙТИ В РАЗДЕЛ</span>
              </a>
            </div>

            <div className={s.tile}>
              <Image
                src="/img/Hero/hero-right.jpg"
                alt="Бестселлеры сезона"
                fill
              />
              <a className={s.caption} href="#">
                <h2 className={s.title}>БЕСТСЕЛЛЕРЫ СЕЗОНА</h2>
                <span className={s.link}>ПЕРЕЙТИ В РАЗДЕЛ</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
