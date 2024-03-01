export type CollaboratorSchema = {
  collaborator: {
    name: string;
    image: string;
    bio: string;
    link: {
      github: string;
      portfolio: string;
      atcoder: string;
    };
  };
};

export type CollaboratorListSchema = {
  head: string;
  items: CollaboratorSchema[];
};
