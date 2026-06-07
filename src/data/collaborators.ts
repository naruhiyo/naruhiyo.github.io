import { CollaboratorListSchema } from '@src/types/Collaborator';

export const COLLABORATORS_DATA: CollaboratorListSchema = {
  head: 'Collaborators',
  items: [
    {
      collaborator: {
        name: '@narugit',
        image: 'images/narugit.png',
        bio: 'グルメエンジニア',
        link: {
          portfolio: 'https://narugit.github.io/'
        }
      }
    },
    {
      collaborator: {
        name: '@aecomet',
        image: 'images/aecomet.png',
        bio: 'ひよこエンジニア',
        link: {
          portfolio: 'https://aecomet.github.io'
        }
      }
    }
  ]
};
