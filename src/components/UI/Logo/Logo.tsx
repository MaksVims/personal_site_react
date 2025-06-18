import { FC } from "react"
import cl from 'classnames'
import Image from '../../../assets/logo.png'
import scss from './Logo.module.scss'

interface ModalProps {
  classes?: string,
  alt?: string
}

export const Logo: FC<ModalProps> = ({ classes, alt }) => {

  const classesLogo = cl(scss.logo, classes)

  return (
    <a
      href="#"
      className={classesLogo}
    >
      <img
        src={Image}
        alt={alt || 'logo'}
      />
    </a>
  )
}