import cl from 'classnames';
import scss from './Header.module.scss';
import { Logo } from "../UI";
import { Menu } from "../UI/Navigation";
import { menuData } from '../../consts';

const menuItems = menuData.map(item => ({ ...item, classLink: scss.menu_link }))

export const Header = () => {
  const classes = cl(scss.header_container, "container")

  return (
    <header
      id="header"
      className={scss.header}
    >
      <div className={classes}>
        <Logo />
        <Menu
          items={menuItems}
          classList={scss.menu_list}
        />
      </div>
    </header>
  )
}