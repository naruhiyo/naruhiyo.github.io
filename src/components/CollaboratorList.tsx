import { Collaborator } from '@src/components/Collaborator';
import { COLLABORATORS_DATA } from '@src/data/collaborators';
import { CollaboratorSchema } from '@src/types/Collaborator';

export const CollaboratorList = () => {
  return (
    <section aria-label={COLLABORATORS_DATA.head} className="collab-grid">
      {COLLABORATORS_DATA.items.map((item: CollaboratorSchema) => (
        <Collaborator key={item.collaborator.name} collaborator={item.collaborator} />
      ))}
    </section>
  );
};
