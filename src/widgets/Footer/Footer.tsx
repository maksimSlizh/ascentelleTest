import Image from "next/image";
import { Container } from "@/shared/ui";
import s from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={s.root}>
      <Container px>
        <div className={s.top}>
          <div className={`${s.col}`}>
            <div className={s.group}>
              <div className={s.title}>КАТАЛОГ</div>
              <div className={s.lists}>
                <ul className={s.list}>
                  <li><a href="#">ЖАКЕТЫ</a></li>
                  <li><a href="#">РУБАШКИ</a></li>
                  <li><a href="#">ЖИЛЕТЫ</a></li>
                  <li><a href="#">БРЮКИ</a></li>
                  <li><a href="#">ЮБКИ</a></li>
                  <li><a href="#">ШОРТЫ</a></li>
                  <li><a href="#">САРАФАНЫ</a></li>
                  <li><a href="#">ПЛАТЬЯ</a></li>
                  <li><a href="#">LOOKBOOK</a></li>
                </ul>

                <ul className={s.list}>
                  <li><a href="#">SUMMER LIFE</a></li>
                  <li><a href="#">NATURE</a></li>
                  <li><a href="#">BACK OFFICE</a></li>
                  <li><a href="#">TRAVEL</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className={s.col}>
            <div className={s.title}>ПОКУПАТЕЛЯМ</div>
            <ul className={s.list}>
              <li><a href="#">ДОСТАВКА И ОПЛАТА</a></li>
              <li><a href="#">УСЛОВИЯ ВОЗВРАТА</a></li>
              <li><a href="#">ОТСЛЕДИТЬ СТАТУС ЗАКАЗА</a></li>
              <li><a href="#">ВОПРОС-ОТВЕТ</a></li>
              <li><a href="#">ДОКУМЕНТЫ САЙТА</a></li>
            </ul>
          </div>

          <div className={`${s.col} ${s.colCompany}`}>
            <div className={s.colHead}>
              <div className={s.title}>КОМПАНИЯ</div>
              <a href="#" className={s.toTop} aria-label="Наверх">
                НАВЕРХ <Image src="/svg/Footer/arr-up.svg" alt="" width={20} height={20} />
              </a>
            </div>

            <ul className={s.list}>
              <li><a href="#">О БРЕНДЕ</a></li>
              <li><a href="#">НОВОСТИ И СОБЫТИЯ</a></li>
              <li><a href="#">КОНТАКТЫ</a></li>
            </ul>

            <div className={s.colFoot}>
              <div className={s.contacts}>
                <a className={s.phone} href="tel:+79266069926">+7 926 606-99-26</a>
                <div className={s.hours}>с 10:00 до 19:00 ПН–ВС</div>
              </div>
              <a className={s.tg} href="#" rel="noopener">ТЕЛЕГРАМ-КАНАЛ</a>
            </div>
          </div>

        </div>

        <div className={s.brand}>
          <Image
            src="/img/logo/logo-lg.png"
            alt="Ascentelle Club"
            priority={false}
            width={1400}
            height={192}
          />
        </div>

        <div className={s.bottom}>
          <div className={s.copy}>© 2025 ASCENTELLE</div>
          <a className={s.policy} href="#">ПОЛИТИКА ЗАЩИТЫ И ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</a>
        </div>
      </Container>
    </footer>
  );
}
