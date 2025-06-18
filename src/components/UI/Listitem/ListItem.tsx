import { FC } from "react";
import { Link } from "../Link/Link";
import { ILinkItem } from "../../../types";

interface ListItemProps {
  classes?: string,
  data: ILinkItem
}

export const ListItem: FC<ListItemProps> = ({ classes, data }) => {
  const {
    ref,
    icon,
    text,
    classLink,
    classText,
    isBlank
  } = data

  const content = icon && text ? (
    <>
      {icon}
      <span className={classText}>{text}</span>
    </>
  ) : (
    <>{text}</>
  )

  return (
    <li className={classes}>
      <Link
        ref={ref}
        classes={classLink}
        isBlank={isBlank}
      >
        {content}
      </Link>
    </li>
  )
}