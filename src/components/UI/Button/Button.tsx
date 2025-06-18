import { FC, ReactElement, ReactNode } from "react"
import scss from './Button.module.scss'
import cl from 'classnames'

interface ButtonProps {
  children: ReactElement | ReactNode,
  classButton?: string,
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  classButton
}) => {
  const classes = cl(classButton, scss.button)

  return (
    <button
      onClick={onClick}
      className={classes}
      type="submit"
    >
      {children}
    </button>
  )
}