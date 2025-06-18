import { FC } from 'react'
import scss from './Card.module.scss'
import cl from 'classnames'

interface CardProps {
  ref?: string,
  classPicture: string,
  title: string,
  text: string,
  isBlank?: Boolean
}

export const Card: FC<CardProps> = ({
  ref,
  classPicture,
  isBlank,
  text,
  title
}) => {
  const classesPicture = cl(scss.picture, classPicture)

  return (
    <div className={scss.card}>
      <a
        href={ref}
        className={classesPicture}
        target={isBlank ? '_blank' : ''}
      ></a>
      <div className={scss.content}>
        <h4 className={scss.title}>{title}</h4>
        <p className={scss.text}>{text}</p>
      </div>
    </div>
  )
}