import { CollaboratorListSchema } from '@src/types/Collaborator';

export const COLLABORATORS_DATA: CollaboratorListSchema = {
  head: 'collaborators.head',
  items: [
    {
      collaborator: {
        name: '@narugit',
        image: 'images/narugit.png',
        bio: 'collaborators.items.narugit.bio',
        link: {
          portfolio: 'https://narugit.github.io/'
        }
      }
    },
    {
      collaborator: {
        name: '@aecomet',
        image: 'images/aecomet.png',
        bio: 'collaborators.items.aecomet.bio',
        link: {
          portfolio: 'https://aecomet.github.io'
        }
      }
    }
  ]
};
