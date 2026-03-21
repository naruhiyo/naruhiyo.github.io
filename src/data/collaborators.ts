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
          github: 'https://github.com/narugit',
          portfolio: 'https://narugit.github.io/',
          atcoder: 'https://atcoder.jp/users/narucode'
        }
      }
    },
    {
      collaborator: {
        name: '@aecomet',
        image: 'images/aecomet.png',
        bio: 'ひよこエンジニア',
        link: {
          github: 'https://github.com/aecomet',
          portfolio: 'https://aecomet.github.io',
          atcoder: 'https://atcoder.jp/users/ae_aecomet'
        }
      }
    }
  ]
};
