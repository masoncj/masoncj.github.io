import { ParsedUrlQuery } from "querystring";

export function ofTags(query: ParsedUrlQuery): string[] {
    const tags = query.tags;
    if (!tags) {
        return [];
    } else if (Array.isArray(tags)) {
        return tags;
    } else {
        return tags.split(",");
    }
}
