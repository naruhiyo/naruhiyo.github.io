export type ProductSchema = {
  product: {
    order: string;
    name: string;
    tag: string;
    desc: string;
    github: string;
  };
};

export type ProductListSchema = {
  head: string;
  items: ProductSchema[];
};
