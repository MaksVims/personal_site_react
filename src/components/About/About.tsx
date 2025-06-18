import cl from 'classnames'
import scss from './About.module.scss'
import Image from '../../assets/about-picture.png'

export const About = () => {

  const classes = cl(scss.about_container, 'container')

  return (
    <section className={scss.about} id="about">
      <div className={classes}>
        <div className={scss.content}>
          <h2 className={scss.title}>
            О себе
          </h2>
          <p className={scss.text}>
            Я занимаюсь фронтенд разработкой около 5 лет. За это время я занимался разработкой проектов различных
            уровней сложности от простых лэндингов до онлайн сервисов.
            Пишу на современных фреймворках React и Vue3, а так же знаю всю окружающую их экосистему. В работе использую
            преимущественно Typescript, инструмент, который позволяет создавать устойчивые и качественные продукты.
          </p>
        </div>
        <div className={scss.picture}>
          <img
            src={Image}
            className={scss.image}
            alt="picture"
          />
        </div>
      </div>
    </section>
  )
}

