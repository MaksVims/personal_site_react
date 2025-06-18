import cl from 'classnames'
import scss from './Footer.module.scss'

import { Logo } from "../UI";
import { Social } from "../UI/Navigation";
import { GitHub, Telegram, Vk, Whatsapp } from "../UI/SVGComponents";
import { ILinkItem } from "../../types";

export const Footer = () => {

  const classes = cl(scss.footer_container, 'container')

  const socialItems: ILinkItem[] = [
    {
      ref: 'https://github.com/maksvims',
      icon: <GitHub />,
      text: 'Github',
    },
    {
      ref: 'https://wa.me/79320185660',
      icon: <Whatsapp />,
      text: 'Whatsapp',
    },
    {
      ref: 'https://vk.com/id336155037',
      icon: <Vk />,
      text: 'Вконтакте',
    },
    {
      ref: 'tg://resolve?domain=Maks_Vims',
      icon: <Telegram />,
      text: 'Telegram',
    }
  ].map(item => ({
    ...item,
    classText: scss.link_text,
    classLink: scss.social_link,
    isBlank: true
  }))

  return (
    <footer className={scss.footer}>
      <div className={classes}>
        <div className={scss.content}>
          <div className={scss.content_container}>
            <Logo
              classes={scss.logo}
              alt="footer logo"
            />
          </div>
          <Social
            items={socialItems}
            classes={scss.social}
            classList={scss.social_list}
          />
        </div>
        <div className={scss.copyright}>
          <p>
            Not Copyright 2025 • Максим Сметанин
          </p>
        </div>
      </div>
    </footer>
  )
}