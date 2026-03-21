import { Collaborator } from '@src/components/Collaborator';
import { GenericList } from '@src/components/GenericList';
import { COLLABORATORS_DATA } from '@src/data/collaborators';
import { CollaboratorSchema } from '@src/types/Collaborator';

export const CollaboratorList = () => (
  <GenericList<CollaboratorSchema>
    label={COLLABORATORS_DATA.head}
    className="collab-grid"
    items={COLLABORATORS_DATA.items}
    renderItem={(item) => <Collaborator collaborator={item.collaborator} />}
    keyExtractor={(item) => item.collaborator.name}
  />
);
