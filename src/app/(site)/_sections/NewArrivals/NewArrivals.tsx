import { Container } from "@/shared/ui";
import { ProductCard } from "@/entities/cards";
import { products } from "@/shared/mocks";
import s from "./NewArrivals.module.scss";

export function NewArrivals() {
  return (
    <section className={s.root} aria-labelledby="new-title">
      <Container>
        <div className={s.head}>
          <h2 id="new-title" className={s.title}>НОВОЕ ПОСТУПЛЕНИЕ</h2>
          <a className={s.all} href="#">СМОТРЕТЬ ВСЕ</a>
        </div>

        <div className={s.grid} role="list">
          {products.map((p) => (
            <div className={s.item} role="listitem" key={p.id}>
              <ProductCard {...p} />
            </div>
          ))}
        </div>

        <div className={s.dots} aria-hidden>
          <span className={`${s.dot} ${s.dotActive}`}></span>
          <span className={s.dot}></span>
          <span className={s.dot}></span>
          <span className={s.dot}></span>
        </div>
      </Container>
    </section>
  );
}
