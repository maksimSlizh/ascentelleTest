import Image from "next/image";
import { Container } from "@/shared/ui";
import s from "./Lookbook.module.scss";

export function Lookbook() {
  return (
    <section className={s.root} aria-labelledby="lkb-title">
      <Container>
        <div className={s.top}>
          <h2 id="lkb-title">LOOKBOOK</h2>
          <a className={s.all} href="#">СМОТРЕТЬ ВСЕ</a>
        </div>

        <div className={s.grid}>
          <div className={s.arrow} aria-hidden>
            <Image src="/img/icons/arr-right-2.png" alt="" width={20} height={20} />
          </div>

          <a className={`${s.tile} ${s.tileLg}`} href="#">
            <div className={`${s.media} ${s.flipX}`}>
              <Image src="/img/Lookbook/l1.png" alt="Lookbook 1" fill />
            </div>
            <div className={s.captionUnder}>
              <div className={s.name}>LOOKBOOK_NAME</div>
              <div className={s.sub}>15 ИЗДЕЛИЙ</div>
            </div>
          </a>

          <a className={`${s.tile} ${s.tileLg}`} href="#">
            <div className={`${s.media} ${s.rot180} ${s.flipY}`}>
              <Image src="/img/Lookbook/l2.png" alt="Lookbook 2" fill />
            </div>
            <div className={s.captionUnder}>
              <div className={s.name}>LOOKBOOK_NAME</div>
              <div className={s.sub}>15 ИЗДЕЛИЙ</div>
            </div>
          </a>

          <a className={`${s.tile} ${s.tileSm}`} href="#">
            <div className={`${s.media} ${s.flipY} ${s.rot180} ${s.pos3}`}>
              <Image src="/img/Lookbook/l3.png" alt="Lookbook 3" fill />
            </div>
            <div className={s.captionUnder}>
              <div className={s.name}>LOOKBOOK_NAME</div>
              <div className={s.sub}>15 ИЗДЕЛИЙ</div>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}
