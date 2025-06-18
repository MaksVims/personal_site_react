import { FC } from "react";
import { ListItem } from "..";
import { ILinkItem } from "../../../types";


interface SocialProps {
  items: ILinkItem[],
  classes?: string,
  classList?: string
}

export const Social: FC<SocialProps> = ({
  items,
  classes,
  classList
}) => {

  return (
    <nav className={classes}>
      <ul className={classList}>
        {
          items.map((item) => {
            return (
              <ListItem
                data={item}
                key={item.ref}
              />
            )
          })
        }
      </ul>
    </nav>
  )
}