
export type Tags = {[name: string]: Tag}

export type Tag = {
  name: string
};

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
};

export type Feed = {
  title: string,
  items: Item[],
};
