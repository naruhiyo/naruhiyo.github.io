export type ProductSchema = {
  product: {
    order: string;
    name: string;
    tag: string;
    desc: string;
    github: string;
    image?: string;
  };
};

export type ProductListSchema = {
  head: string;
  items: ProductSchema[];
};
