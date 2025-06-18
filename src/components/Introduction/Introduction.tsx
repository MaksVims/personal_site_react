import scss from './Introduction.module.scss'
import cl from 'classnames'

export const Introduction = () => {

  const classes = cl(scss.introduction_container, 'container')

  return (
    <section className={scss.introduction}>
      <div className={classes}>
        <div className={scss.introduction_title}>
          <h1 className={scss.main_title}>
            Я Максим Сметанин. Фронтенд разработчик Нахожусь в России.
          </h1>
          <p className={scss.introduction_text}>
            Если у вас есть отличный проект, требующих хороших навыков, напишите мне.
          </p>
        </div>
      </div>
    </section>
  )
}