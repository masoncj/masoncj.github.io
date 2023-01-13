
import { Item } from "../interfaces/item";

type Props = {
    item: Item
}

export default function ItemCard({item}: Props) {
    return (
        <div key={item.id} className="item_title">{item.title}</div>
    )
}
