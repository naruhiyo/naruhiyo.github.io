import { Collaborator } from '@src/components/Collaborator';
import { CollaboratorListSchema, CollaboratorSchema } from '@src/types/Collaborator';

export const CollaboratorList = () => {
  const collaborators: CollaboratorListSchema = {
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

  return (
    <section aria-label={collaborators.head} className="collab-grid">
      {collaborators.items.map((item: CollaboratorSchema) => (
        <Collaborator key={item.collaborator.name} collaborator={item.collaborator} />
      ))}
    </section>
  );
};
