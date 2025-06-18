import React, { FC } from "react";

interface LinkProps {
  children: React.ReactElement | React.ReactNode,
  classes?: string,
  ref: string,
  isBlank?: Boolean
}

export const Link: FC<LinkProps> = ({
  children,
  ref,
  classes,
  isBlank
}) => {
  const target = isBlank ? '_blank' : ''

  return (
    <a
      href={ref}
      className={classes}
      target={target}
    >
      {children}
    </a>
  )
}