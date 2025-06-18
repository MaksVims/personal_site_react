import { ChangeEvent, FC, ReactNode } from 'react'
import scss from './Input.module.scss'
import cl from 'classnames'
import { inputType } from '../../../consts'

interface InputProps {
  value: string,
  name: string,
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  label: string,
  isArea?: Boolean,
  type?: inputType,
  placeholder?: string,
  classInput?: string
}

export const Input: FC<InputProps> = ({
  onChange,
  value,
  isArea,
  type,
  name,
  label,
  classInput,
}) => {


  let input: ReactNode

  if (isArea) {
    const classesInput = cl(scss.input, classInput)
    input = (
      <textarea
        value={value}
        onChange={onChange}
        name={name}
        className={classesInput}
      />
    )
  } else {
    const classesInput = cl(scss.input, classInput)
    input = (
      <input
        type={type || inputType.TEXT}
        value={value}
        onChange={onChange}
        name={name}
        className={classesInput}
      />
    )
  }

  return (
    <label className={scss.label}>
      <span>{label}</span>
      {input}
    </label>
  )
}