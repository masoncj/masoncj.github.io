import { Tag } from "./tag";

export type Item = {
    id: string,
    url: string,
    title: string,
    icon: string,
    content_html: string,
    excerpt: string,
    date_published: Date,
    date_modified: Date,
    tags: Tag[]
}
