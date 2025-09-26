import { Container, Dots } from "@/shared/ui";
import { ProductCard } from "@/entities/cards";
import { products } from "@/shared/mocks";
import s from "./NewArrivals.module.scss";

export function NewArrivals() {
  return (
    <section className={s.root} aria-labelledby="new-title">
      <Container px>
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

        <Dots total={4} active={0} className={s.dots} />
      </Container>
    </section>
  );
}
