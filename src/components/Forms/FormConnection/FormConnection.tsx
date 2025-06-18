import { ChangeEvent, useEffect } from 'react'
import { useLocalStorage } from '../../../hooks'
import { IConnectionStorageData } from '../../../types'
import { Button, Input } from '../../UI'
import scss from './FormConnection.module.scss'
import { inputType } from '../../../consts'

const initialValueStorageData: IConnectionStorageData = {
  name: { label: 'name', value: '' },
  email: { label: 'email', value: '' },
  message: { label: 'message', value: '' }
}

export const FormConnection = () => {
  const [data, setData] = useLocalStorage('connection', initialValueStorageData)

  useEffect(() => {
    console.log(data);

  }, [data])

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.name);

    const updateData = {
      ...data,
      [e.target.name]: { label: e.target.name, value: e.target.value }
    }
    setData(updateData)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Send data', data);
    setData({ ...initialValueStorageData })
  }

  return (
    <form onSubmit={onSubmit} className={scss.form}>

      <Input
        value={data.name.value}
        onChange={onChange}
        name={data.name.label}
        label='Имя'
        classInput={scss.input}
      />

      <Input
        value={data.email.value}
        onChange={onChange}
        name={data.email.label}
        label='Email'
        type={inputType.EMAIL}
        classInput={scss.input}
      />

      <Input
        value={data.message.value}
        onChange={onChange}
        name={data.message.label}
        label='Сообщение'
        isArea={true}
        classInput={scss.area}
      />

      <Button classButton={scss.send}>
        Отправить
      </Button>
    </form>
  )
}