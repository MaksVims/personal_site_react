import { FormConnection } from '../Forms/FormConnection/FormConnection'
import scss from './Connection.module.scss'
import cl from 'classnames'

export const Connection = () => {
  const classes = cl(scss.connection_container, 'container')

  return (
    <section id="connection" className={classes}>
      <div className={scss.content}>
        <h2 >
          Давайте начнем
        </h2>
        <p className={scss.text}>
          Теперь, когда вы немного обо мне знаете, дайте мне знать, если хотите со мной работать.
        </p>
      </div>
      <div className={scss.interface}>
        <FormConnection />
      </div>
    </section>
  )
}