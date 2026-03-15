export type HeaderNavigationSchema = {
  label: string;
  path: string;
  end?: boolean;
};

export type HeaderSchema = {
  shortTitle: string;
  navigation: HeaderNavigationSchema[];
};
