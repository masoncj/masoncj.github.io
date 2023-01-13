
import { useRouter } from "next/router";
import { ofTags } from "../utils/tags";
type Props = {
    tag: string
}

function hashCode(s: string):number{
    return s.split('').reduce(
        (a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},
    0)
}



export default function TagBubble({tag}: Props) {
    const router = useRouter();
    const hue = hashCode(tag.toLowerCase()) % 180 + 180;

    const onClick = (evt) => {
        // TODO: there must be some easier way to do this?
        const tags = ofTags(router.query)
        router.push({query : {tags: tags + tag}})
    }

    return (
        <li className="tag" style={{
            backgroundColor: `hsl(${hue}, 100%, 30%)`,
            color: `hsl(${hue}, 90%, 80%)`,
            borderColor: `hsl(${hue}, 90%, 60%)`
        }} onClick={onClick}>
            {tag}
        </li>
    )
}