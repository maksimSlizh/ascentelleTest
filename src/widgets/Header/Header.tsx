import Image from "next/image";
import Link from "next/link";
import { Container } from "@/shared/ui";
import s from "./Header.module.scss";

export function Header() {
  return (
    <header className={s.root}>
      <div className={s.topbar}>
        <Container px>
          <div className={s.topbarRow}>
            <span>МАКСИМАЛЬНЫЕ ЛЕТНИЕ СКИДКИ 25%</span>
            <a className={s.topbarClose} href="#">ЗАКРЫТЬ</a>
          </div>
        </Container>
      </div>

      <div className={s.main}>
        <Container px>
          <div className={s.row}>
            <nav className={s.nav}>
              <a href="#">КАТАЛОГ</a>
              <a href="#">КОЛЛЕКЦИИ</a>
              <a href="#">НОВИНКИ</a>
              <a href="#">LOOKBOOK</a>
            </nav>

            <Link className={s.logo} href="/" aria-label="Ascentelle">
              <Image
                src="/svg/Header/logo.svg"
                alt="Ascentelle Club"
                priority={false}
                width={106}
                height={40}
              />
            </Link>

            <div className={s.tools}>
              <a className={s.city} href="#">
                <Image src="/svg/Header/pin.svg" alt="" width="16" height="16" aria-hidden />
                <span>САНКТ-ПЕТЕРБУРГ</span>
              </a>

              <a className={s.icon} href="#" aria-label="Избранное">
                <Image src="/svg/Header/heart.svg" alt="" width="16" height="16" />
              </a>
              <a className={s.icon} href="#" aria-label="Поиск">
                <Image src="/svg/Header/search.svg" alt="" width="16" height="16" />
              </a>
              <a className={s.icon} href="#" aria-label="Профиль">
                <Image src="/svg/Header/user.svg" alt="" width="16" height="16" />
              </a>
              <a className={s.icon} href="#" aria-label="Корзина">
                <Image src="/svg/Header/bag.svg" alt="" width="16" height="16" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
