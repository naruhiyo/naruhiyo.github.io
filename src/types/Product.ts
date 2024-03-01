export type ProductSchema = {
  product: {
    name: string;
    image: string;
    desc: string;
    github: string;
  };
};

export type ProductListSchema = {
  head: string;
  items: ProductSchema[];
};
