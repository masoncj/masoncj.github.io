import { ParsedUrlQuery } from "querystring";
import { Tag, Tags } from "interfaces";

export function ofTags(query: ParsedUrlQuery, tags: Tags): Tag[] {
    const activeTags = query.tags;
    if (!activeTags) {
        return [];
    }
    const tagNames = Array.isArray(activeTags) ? activeTags : activeTags.split(",")
    return tagNames.map((tagName) => tags[tagName]);
}
