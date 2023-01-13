import {Url} from "url";

export type Item = {
    id: string,
    url: Url,
    title: string,
    content_html: string,
    summary: string,
    date_published: Date,
    date_modified: Date,
    tags: string[]
}
