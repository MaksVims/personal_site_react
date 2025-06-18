import { useState } from "react";
import { Carousel } from 'antd'
import cl from 'classnames'
import scss from './Projects.module.scss'

import { slidesData } from "../../consts";
import { Card } from "../UI";

const classPictrures = [
  scss.picture_1,
  scss.picture_2,
  scss.picture_3,
  scss.picture_4
]

const slides = slidesData.map((slide, idx) => ({
  ...slide,
  classPicture: classPictrures[idx]
}))

export const Projects = () => {
  const classes = cl(scss.projects_container, 'container')

  return (
    <section id="projects" className={classes}>
      <div className={scss.content}>
        <h2 className={scss.title}>Мои проекты</h2>
        <h3 className={scss.subtitle}>Работа, которую с сделал за последние несколько лет</h3>
      </div>

      <div className={scss.slider_wrap}>
        <Carousel
          className={scss.slider}
        >
          {
            slides.map(slide => (
              <div key={slide.ref}>
                <Card {...slide} />
              </div>
            ))
          }

        </Carousel>
      </div>

    </section>
  )
}