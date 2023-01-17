
import { useRouter } from "next/router";
import { Tag, Tags } from "../interfaces";
import classNames from "classnames";
import {MouseEvent} from "react";

type Props = {
  tag: Tag,
  onClick?: (tag: Tag) => void,
  showClose?: Boolean,
  onClose?: (tag: Tag) => void,
  highlighted?: Boolean
}

function hashCode(s: string):number{
  return s.split('').reduce(
      (a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},
  0)
}


export default function TagBubble(
  {
    tag,
    onClick = (tag: Tag) => {},
    showClose = false,
    onClose = (tag: Tag) => {},
    highlighted = false,
  }: Props
) {
  const router = useRouter();
  const hue = hashCode(tag.name.toLowerCase()) % 180 + 180;

  const onCloseClick = (evt: MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation();
    onClose(tag);
  }

  return (
    <li
        className={classNames({
          'tag': true,
          'highlighted': highlighted
        })}
        style={{
          backgroundColor: `hsl(${hue}, 100%, 30%)`,
          color: `hsl(${hue}, 90%, 80%)`,
          borderColor: `hsl(${hue}, 90%, 60%)`
        }}
        onClick={() => onClick(tag)}
    >
        {tag.name}
      {showClose &&
        <div className="tagClose" style={{borderColor: `hsl(${hue}, 90%, 60%)`}} onClick={onCloseClick}>
          &#10005;
        </div>
      }
    </li>
  )
}