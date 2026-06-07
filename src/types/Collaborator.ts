export type CollaboratorSchema = {
  collaborator: {
    name: string;
    image: string;
    bio: string;
    link: {
      portfolio: string;
    };
  };
};

export type CollaboratorListSchema = {
  head: string;
  items: CollaboratorSchema[];
};
