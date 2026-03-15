export type ActivityStatSchema = {
  value: string;
  label: string;
};

export type ActivitySchema = {
  activity: {
    name: string;
    body: string[];
    github: string;
    stats: ActivityStatSchema[];
  };
};

export type ActivityListSchema = {
  head: string;
  items: ActivitySchema[];
};
