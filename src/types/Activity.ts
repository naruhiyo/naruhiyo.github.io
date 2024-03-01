export type ActivitySchema = {
  activity: {
    name: string;
    desc: string;
    github: string;
  };
};

export type ActivityListSchema = {
  head: string;
  items: ActivitySchema[];
};
