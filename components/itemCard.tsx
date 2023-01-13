
import { Item } from "../interfaces/item";

type Props = {
    item: Item
}

export default function ItemCard({item}: Props) {
    const icon = "/images" + item.url + item.icon;
    const url = item.url
    return (
        <li>
            <div className='summary-container'>
                <div className='summary-icon-square'>
                    <img src={icon}/>
                </div>
                <div className='summary-info'>
                    <h2>
                        <a className="summary-link" href={url}>
                            {item.title}
                        </a>
                    </h2>
                    <ul className='tag-list'>
                        { item.tags.map((tag)=>(
                            <li className="tag">{tag}</li>
                        ))}
                    </ul>
                    <p>{item.excerpt}</p>
                </div>
            </div>
        </li>
    )
}
