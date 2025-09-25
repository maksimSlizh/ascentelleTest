import Image from "next/image";
import { Container } from "@/shared/ui";
import { categories } from "@/shared/mocks";
import s from "./Categories.module.scss";

export function Categories() {
  return (
    <section className={s.root} aria-labelledby="cat-label">
      <Container>
        <div className={s.head}>
          <h2 id="cat-label" className={s.title}>ПОПУЛЯРНЫЕ КАТЕГОРИИ</h2>
          <a className={s.all} href="#">СМОТРЕТЬ ВСЕ</a>
        </div>

        <div className={s.grid} role="list">
          {categories.map((c, i) => (
            <a
              key={c.slug}
              className={`${s.tile} ${i > 0 ? s.withDivider : ""}`}
              href={`/catalog/${c.slug}`}
              role="listitem"
            >
              <Image src={c.img} alt={c.title} fill />
              <div className={s.caption}>
                <div className={s.name}>{c.title}</div>
                <div className={s.link}>ПЕРЕЙТИ В РАЗДЕЛ</div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
