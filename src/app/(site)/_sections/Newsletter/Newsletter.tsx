import Image from "next/image";
import { Container } from "@/shared/ui";
import s from "./Newsletter.module.scss";

export function Newsletter() {
  return (
    <section className={s.root} aria-labelledby="nl-title">
      <Container px>
        <div className={s.grid}>
          <div className={s.left}>
            <div>
              <h3 id="nl-title" className={s.title}>ASCENTELLE CLUB</h3>
              <p className={s.desc}>
                Подпишитесь на нашу рассылку и получайте обновления, информацию о запуске
                коллекций, скидках и специальных предложениях.
              </p>
            </div>


            <form className={s.form}>
              <label className={s.field}>
                <input type="email" placeholder="YOUR@EMAIL.ADDRESS" />
                <span className={s.underline} />
              </label>

              <button type="button" className={s.btn}>ПОДПИСАТЬСЯ</button>
            </form>
          </div>

          <div className={s.right}>
            <Image
              src="/img/Newsletter/1.png"
              alt="Ascentelle Club"
              fill
              priority={false}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
